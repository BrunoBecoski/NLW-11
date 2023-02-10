interface ProgressBarProps {
  progress: number
}

export function ProgressBar(props: ProgressBarProps) {
  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        role="progressbar"
        ariar-label="Progresso de hábito completados nesse dia"
        aria-valuenow={75}
        className="h-3 rounded-xl bg-violet-600"
        style={{ width: `${props.progress}%` }}
      />
    </div>
  )
}