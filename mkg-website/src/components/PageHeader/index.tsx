import React from 'react'

export const PageHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => {
  return (
    <div className="page-title accent-background">
      <div className="container position-relative">
        <div className="d-flex align-items-baseline gap-3">
          <h1>{title}</h1>
          {subtitle && <p className="mb-0 text-white-50">{subtitle}</p>}
        </div>
      </div>
    </div>
  )
}
