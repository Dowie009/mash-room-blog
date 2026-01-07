/**
 * Signal Flow - Three.js実装
 * 軽量でパフォーマンス最適化されたパーティクルシステム
 */

export class SignalFlowThree {
  constructor(containerId) {
    this.containerId = containerId;
    this.container = null;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.particles = [];
    this.particleSystem = null;
    this.connections = [];
    this.mouse = { x: 0, y: 0 };
    this.isInitialized = false;
    this.animationId = null;
    
    // 設定
    this.config = {
      particleCount: 60,
      connectionDistance: 150,
      repulsionDistance: 100,
      repulsionStrength: 0.5,
      attractionStrength: 0.02,
      particleSize: 3,
      lineOpacity: 0.2,
      colors: {
        particle: 0x007aff,
        line: 0x007aff
      }
    };
  }

  async init() {
    if (this.isInitialized) return;
    
    // 動的インポート（遅延読み込み）
    try {
      const THREE = await import('three');
      // Three.jsのデフォルトエクスポートまたは名前付きエクスポートに対応
      this.THREE = THREE.default || THREE;
      this.setupScene();
      this.isInitialized = true;
    } catch (error) {
      console.error('Three.js failed to load, falling back to Canvas 2D:', error);
      this.fallbackToCanvas2D();
      return;
    }
  }

  setupScene() {
    const { Scene, WebGLRenderer, PerspectiveCamera, Color, BufferGeometry, 
            PointsMaterial, Points, Vector3, Float32BufferAttribute } = this.THREE;

    this.container = document.getElementById(this.containerId);
    if (!this.container) {
      console.error(`Container #${this.containerId} not found`);
      return;
    }

    // Canvas要素を探す（既存のcanvas要素を使用）
    const canvasElement = this.container.querySelector('canvas');
    if (!canvasElement) {
      console.error('Canvas element not found in container');
      return;
    }

    const width = this.container.offsetWidth;
    const height = this.container.offsetHeight;

    // シーン
    this.scene = new Scene();
    this.scene.background = new Color(0x000000);
    this.scene.background.alpha = 0; // 透明背景

    // カメラ
    this.camera = new PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 500;

    // レンダラー
    this.renderer = new WebGLRenderer({ 
      canvas: canvasElement, // 既存のcanvas要素を使用
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // パフォーマンス最適化
    this.renderer.setClearColor(0x000000, 0); // 透明

    // パーティクルシステム
    this.createParticles();
    
    // マウスインタラクション
    this.setupMouseInteraction();
    
    // リサイズ対応
    this.setupResize();
    
    // アニメーション開始
    this.animate();
  }

  createParticles() {
    const { BufferGeometry, PointsMaterial, Points, Vector3, Float32BufferAttribute } = this.THREE;
    
    const geometry = new BufferGeometry();
    const positions = new Float32Array(this.config.particleCount * 3);
    const velocities = [];
    
    // パーティクルの初期位置と速度
    for (let i = 0; i < this.config.particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 1000;
      positions[i3 + 1] = (Math.random() - 0.5) * 300;
      positions[i3 + 2] = (Math.random() - 0.5) * 1000;
      
      velocities.push({
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.5,
        z: (Math.random() - 0.5) * 0.5
      });
    }
    
    geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
    
    const material = new PointsMaterial({
      color: this.config.colors.particle,
      size: this.config.particleSize,
      transparent: true,
      opacity: 0.8
    });
    
    this.particleSystem = new Points(geometry, material);
    this.scene.add(this.particleSystem);
    
    // パーティクルデータを保存
    this.particles = {
      positions: positions,
      velocities: velocities
    };
  }

  setupMouseInteraction() {
    // マウス位置の正規化（-1 to 1）
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    }, { passive: true });

    // マウスインタラクション範囲
    window.addEventListener('mousemove', () => {
      this.updateParticles();
    }, { passive: true });
  }

  updateParticles() {
    const { Vector3 } = this.THREE;
    
    // マウス位置を3D空間に変換
    const mouse3D = new Vector3(
      this.mouse.x * 500,
      this.mouse.y * 300,
      0
    );
    
    const positions = this.particles.positions;
    const velocities = this.particles.velocities;
    
    for (let i = 0; i < this.config.particleCount; i++) {
      const i3 = i * 3;
      const particlePos = new Vector3(
        positions[i3],
        positions[i3 + 1],
        positions[i3 + 2]
      );
      
      // マウスとの距離を計算
      const distance = particlePos.distanceTo(mouse3D);
      
      if (distance < this.config.repulsionDistance) {
        // マウスに近い場合は反発
        const direction = new Vector3()
          .subVectors(particlePos, mouse3D)
          .normalize();
        
        const repulsion = this.config.repulsionStrength * (1 - distance / this.config.repulsionDistance);
        velocities[i].x += direction.x * repulsion;
        velocities[i].y += direction.y * repulsion;
        velocities[i].z += direction.z * repulsion * 0.5;
      } else if (distance < this.config.connectionDistance) {
        // 中距離ではゆっくり追従（金魚のような動き）
        const direction = new Vector3()
          .subVectors(mouse3D, particlePos)
          .normalize();
        
        const followStrength = this.config.attractionStrength * (1 - distance / this.config.connectionDistance);
        velocities[i].x += direction.x * followStrength;
        velocities[i].y += direction.y * followStrength;
      }
      
      // 速度を適用
      positions[i3] += velocities[i].x;
      positions[i3 + 1] += velocities[i].y;
      positions[i3 + 2] += velocities[i].z;
      
      // 境界処理
      if (Math.abs(positions[i3]) > 500) velocities[i].x *= -0.8;
      if (Math.abs(positions[i3 + 1]) > 250) velocities[i].y *= -0.8;
      if (Math.abs(positions[i3 + 2]) > 500) velocities[i].z *= -0.8;
      
      // 減衰
      velocities[i].x *= 0.98;
      velocities[i].y *= 0.98;
      velocities[i].z *= 0.98;
    }
    
    // 位置を更新
    this.particleSystem.geometry.attributes.position.needsUpdate = true;
    
    // 接続線を描画
    this.drawConnections();
  }

  drawConnections() {
    const { LineBasicMaterial, BufferGeometry, Line, Float32BufferAttribute } = this.THREE;
    
    // 既存の接続線を削除
    this.connections.forEach(line => this.scene.remove(line));
    this.connections = [];
    
    const positions = this.particles.positions;
    const lineMaterial = new LineBasicMaterial({
      color: this.config.colors.line,
      transparent: true,
      opacity: this.config.lineOpacity
    });
    
    // 近接パーティクル間に線を描画
    for (let i = 0; i < this.config.particleCount; i++) {
      const i3 = i * 3;
      const p1 = {
        x: positions[i3],
        y: positions[i3 + 1],
        z: positions[i3 + 2]
      };
      
      for (let j = i + 1; j < this.config.particleCount; j++) {
        const j3 = j * 3;
        const p2 = {
          x: positions[j3],
          y: positions[j3 + 1],
          z: positions[j3 + 2]
        };
        
        const distance = Math.sqrt(
          Math.pow(p1.x - p2.x, 2) +
          Math.pow(p1.y - p2.y, 2) +
          Math.pow(p1.z - p2.z, 2)
        );
        
        if (distance < this.config.connectionDistance) {
          const geometry = new BufferGeometry().setFromPoints([
            new this.THREE.Vector3(p1.x, p1.y, p1.z),
            new this.THREE.Vector3(p2.x, p2.y, p2.z)
          ]);
          
          const line = new Line(geometry, lineMaterial);
          line.material.opacity = this.config.lineOpacity * (1 - distance / this.config.connectionDistance);
          this.scene.add(line);
          this.connections.push(line);
        }
      }
    }
  }

  setupResize() {
    window.addEventListener('resize', () => {
      if (!this.container || !this.camera || !this.renderer) return;
      
      const width = this.container.offsetWidth;
      const height = this.container.offsetHeight;
      
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    }, { passive: true });
  }

  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());
    
    if (this.renderer && this.scene && this.camera) {
      this.updateParticles();
      this.renderer.render(this.scene, this.camera);
    }
  }

  fallbackToCanvas2D() {
    // Canvas 2D実装にフォールバック（既存のコードを使用）
    console.log('Using Canvas 2D fallback');
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    
    if (this.renderer && this.container) {
      this.container.removeChild(this.renderer.domElement);
      this.renderer.dispose();
    }
    
    this.isInitialized = false;
  }
}
