import { useState } from 'react';

type DurationType = '15min' | '30min' | '60min';

interface PriceOption {
  duration: DurationType;
  label: string;
  price: number;
  description: string;
  recommended?: boolean;
}

const PRICE_OPTIONS: PriceOption[] = [
  {
    duration: '15min',
    label: '15分',
    price: 0,
    description: 'お試し・簡単な質問に',
  },
  {
    duration: '30min',
    label: '30分',
    price: 500,
    description: '具体的なお悩み相談に',
    recommended: true,
  },
  {
    duration: '60min',
    label: '1時間',
    price: 2000,
    description: 'じっくり深掘りしたい方に',
  },
];

export default function EstimateWidget() {
  const [selected, setSelected] = useState<DurationType>('30min');
  const [showConfirm, setShowConfirm] = useState(false);

  const selectedOption = PRICE_OPTIONS.find(opt => opt.duration === selected)!;

  const handleSelect = (duration: DurationType) => {
    setSelected(duration);
    setShowConfirm(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirm(true);
  };

  return (
    <div className="estimate-widget">
      <div className="widget-header">
        <span className="widget-tag">PRICING</span>
        <h3 className="widget-title">オンライン相談料金</h3>
        <p className="widget-desc">時間を選んで、今すぐ予約</p>
      </div>

      <form onSubmit={handleSubmit} className="widget-form">
        <div className="price-options">
          {PRICE_OPTIONS.map((option) => (
            <button
              key={option.duration}
              type="button"
              className={`price-option ${selected === option.duration ? 'selected' : ''} ${option.recommended ? 'recommended' : ''}`}
              onClick={() => handleSelect(option.duration)}
            >
              {option.recommended && <span className="recommend-badge">おすすめ</span>}
              <span className="option-duration">{option.label}</span>
              <span className="option-price">
                {option.price === 0 ? (
                  <><span className="price-free">無料</span></>
                ) : (
                  <>¥{option.price.toLocaleString()}<span className="price-tax">（税込）</span></>
                )}
              </span>
              <span className="option-desc">{option.description}</span>
            </button>
          ))}
        </div>

        <div className="summary-box">
          <div className="summary-row">
            <span className="summary-label">選択中のプラン</span>
            <span className="summary-value">{selectedOption.label}相談</span>
          </div>
          <div className="summary-row total">
            <span className="summary-label">お支払い金額</span>
            <span className="summary-price">
              {selectedOption.price === 0 ? (
                <span className="free-text">無料</span>
              ) : (
                <>¥{selectedOption.price.toLocaleString()}</>
              )}
            </span>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          この内容で予約に進む
        </button>
      </form>

      {showConfirm && (
        <div className="confirm-box">
          <div className="confirm-icon">✓</div>
          <div className="confirm-text">
            <strong>{selectedOption.label}のオンライン相談</strong>
            {selectedOption.price === 0 ? (
              <span>（無料）</span>
            ) : (
              <span>（¥{selectedOption.price.toLocaleString()}）</span>
            )}
          </div>
          <p className="confirm-desc">
            左のカレンダーから空き時間を選んで予約を完了してください
          </p>
          <a href="#contact" className="confirm-cta">
            予約フォームへ →
          </a>
        </div>
      )}

      <div className="info-note">
        <span className="info-icon">💡</span>
        <span className="info-text">
          初回15分は無料でお試しいただけます。<br/>
          DTM・機材選び・スタジオ構築など、何でもご相談ください。
        </span>
      </div>

      <style>{`
        .estimate-widget {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          border-radius: 12px;
          padding: 1.5rem;
          color: #fff;
          font-family: 'Noto Sans JP', sans-serif;
        }

        .widget-header {
          margin-bottom: 1.5rem;
        }

        .widget-tag {
          font-family: 'Space Grotesk', monospace;
          font-size: 0.6rem;
          color: #34d399;
          letter-spacing: 0.15em;
          display: inline-block;
          background: rgba(52, 211, 153, 0.15);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          margin-bottom: 0.5rem;
        }

        .widget-title {
          font-family: 'Zen Old Mincho', serif;
          font-size: 1.2rem;
          font-weight: 700;
          margin: 0 0 0.25rem 0;
        }

        .widget-desc {
          font-size: 0.75rem;
          color: #94a3b8;
          margin: 0;
        }

        .widget-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .price-options {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .price-option {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.25rem;
          padding: 1rem 1.25rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s;
          text-align: left;
          color: #fff;
        }

        .price-option:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .price-option.selected {
          background: rgba(0, 122, 255, 0.15);
          border-color: #007aff;
        }

        .price-option.recommended {
          border-color: rgba(52, 211, 153, 0.5);
        }

        .price-option.recommended.selected {
          border-color: #34d399;
          background: rgba(52, 211, 153, 0.15);
        }

        .recommend-badge {
          position: absolute;
          top: -8px;
          right: 12px;
          font-size: 0.55rem;
          background: #34d399;
          color: #0f172a;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          font-weight: 700;
        }

        .option-duration {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          color: #e2e8f0;
        }

        .option-price {
          font-family: 'Space Grotesk', monospace;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .price-free {
          color: #34d399;
        }

        .price-tax {
          font-size: 0.65rem;
          color: #64748b;
          margin-left: 0.25rem;
          font-weight: 400;
        }

        .option-desc {
          font-size: 0.7rem;
          color: #94a3b8;
        }

        .summary-box {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          padding: 1rem;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
        }

        .summary-row.total {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: 0.5rem;
          padding-top: 1rem;
        }

        .summary-label {
          font-size: 0.75rem;
          color: #94a3b8;
        }

        .summary-value {
          font-size: 0.9rem;
          font-weight: 500;
        }

        .summary-price {
          font-family: 'Space Grotesk', monospace;
          font-size: 1.5rem;
          font-weight: 700;
          color: #34d399;
        }

        .free-text {
          color: #34d399;
        }

        .submit-btn {
          background: #007aff;
          border: none;
          border-radius: 8px;
          padding: 1rem;
          color: #fff;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .submit-btn:hover {
          background: #0066dd;
          transform: translateY(-1px);
        }

        .confirm-box {
          margin-top: 1rem;
          padding: 1.25rem;
          background: rgba(52, 211, 153, 0.1);
          border: 1px solid rgba(52, 211, 153, 0.3);
          border-radius: 10px;
          text-align: center;
        }

        .confirm-icon {
          width: 40px;
          height: 40px;
          background: #34d399;
          color: #0f172a;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 0.75rem;
          font-size: 1.25rem;
          font-weight: 700;
        }

        .confirm-text {
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }

        .confirm-text strong {
          color: #34d399;
        }

        .confirm-text span {
          color: #94a3b8;
          font-size: 0.85rem;
        }

        .confirm-desc {
          font-size: 0.75rem;
          color: #94a3b8;
          margin: 0 0 1rem 0;
        }

        .confirm-cta {
          display: inline-block;
          background: #34d399;
          color: #0f172a;
          padding: 0.5rem 1.25rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
        }

        .confirm-cta:hover {
          background: #2dd4bf;
          transform: translateY(-1px);
        }

        .info-note {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          margin-top: 1.25rem;
          padding-top: 1.25rem;
          border-top: 1px dashed rgba(255, 255, 255, 0.1);
        }

        .info-icon {
          font-size: 1rem;
          flex-shrink: 0;
        }

        .info-text {
          font-size: 0.7rem;
          color: #94a3b8;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}
