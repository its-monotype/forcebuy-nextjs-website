export const ThumbsWrapper: React.FC = ({ children }) => {
  return (
    <div className="left-0 absolute right-0 flex flex-col items-center z-1 bottom-11 xl:bottom-14 h-0">
      <div className="h-auto">{children}</div>
    </div>
  )
}
