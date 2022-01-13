import React from 'react'

interface NewheadProps {
  style?: any
  renderCount?: any
  className?: string
}

export const Newhead: React.FC<NewheadProps> = ({ style, renderCount, className }) => {
  return (
    <div className={'header ' + className} style={style}>
      <h2>
        <span className="pull-left">
          {'<Sticky /> '}
          {renderCount ? <small>(invocation: #{renderCount})</small> : null}
        </span>
      </h2>
    </div>
  )
}
