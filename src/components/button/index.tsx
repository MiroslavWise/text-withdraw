import { cx } from "@/helpers/cx"

interface Props {
  label: string
  loading: boolean
  error?: string
}

type ButtonProps = Props & React.ButtonHTMLAttributes<HTMLButtonElement>

function Button({ label, loading, error, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={cx(
        "w-full h-10 max-w-70 flex items-center justify-center rounded-md transition-colors disabled:cursor-not-allowed",
        loading ? "bg-black/5" : "bg-[#111827] disabled:opacity-50",
        className,
      )}
    >
      {loading ? (
        <div className="w-4 h-auto aspect-square relative">
          <svg viewBox="0 0 12 12" fill="none" className="absolute w-4 h-auto aspect-square top-1/2 left-1/2 -translate-1/2 animate-spin">
            <path
              d="M11 6C11 6.98891 10.7068 7.95561 10.1573 8.77785C9.60794 9.6001 8.82705 10.241 7.91342 10.6194C6.99979 10.9978 5.99445 11.0969 5.02455 10.9039C4.05464 10.711 3.16373 10.2348 2.46447 9.53553C1.7652 8.83627 1.289 7.94536 1.09607 6.97545C0.903147 6.00555 1.00216 5.00021 1.3806 4.08658C1.75904 3.17295 2.3999 2.39206 3.22215 1.84265C4.04439 1.29324 5.01109 1 6 1"
              stroke="black"
              strokeOpacity="0.5"
              strokeWidth="2"
            />
          </svg>
        </div>
      ) : (
        <span className="text-white text-sm font-semibold text-center" dangerouslySetInnerHTML={{ __html: label }} />
      )}
    </button>
  )
}

Button.displayName = "Button"
export default Button
