import Label from "@/components/label"

import { cx } from "@/helpers/cx"

interface Props {
  label: string
  error?: string
}

type TextAreaProps = Props & React.TextareaHTMLAttributes<HTMLTextAreaElement>

function TextArea({ label, error, className, ...rest }: TextAreaProps) {
  return (
    <div className="w-full flex flex-col gap-1">
      <Label label={label} name={rest.name} />
      <textarea
        className={cx(
          "w-full h-24 rounded-md  text-sm font-normal text-black/80 placeholder:text-black/50 border flex items-center pl-4 outline-none resize-none py-2 px-3",
          !!error ? "bg-red-100 border-red-600" : "bg-white focus:border-black/80 border-gray-500",
          className,
        )}
        {...rest}
      />
      <span className={cx("text-xs text-red-600", !!error ? "block" : "hidden")}>{error}</span>
    </div>
  )
}

TextArea.displayName = "TextArea"
export default TextArea
