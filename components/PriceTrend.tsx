interface PriceTrendProps {
  priceChange: number;
  showBadge?: boolean;
}

export default function PriceTrend({ priceChange, showBadge = true }: PriceTrendProps) {
  const isPositive = priceChange > 0;
  const isNeutral = priceChange === 0;
  const isHot = priceChange > 30;

  const color = isNeutral ? 'text-[#94A3B8]' : isPositive ? 'text-[#10B981]' : 'text-[#EF4444]';
  const arrow = isNeutral ? '→' : isPositive ? '↑' : '↓';
  const sign = isPositive ? '+' : '';

  return (
    <span className="flex items-center gap-1">
      <span className={`font-semibold text-sm ${color}`}>
        {arrow} {sign}{priceChange.toFixed(1)}%
      </span>
      {showBadge && isHot && (
        <span className="text-xs bg-[#10B981]/20 text-[#10B981] px-1.5 py-0.5 rounded-full font-bold" aria-hidden="true">🔥 Hot</span>
      )}
    </span>
  );
}
