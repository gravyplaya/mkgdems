'use client'
import React from 'react'
import { useField, useForm } from '@payloadcms/ui'

const SubmissionView: React.FC<any> = ({ field, path }) => {
  const { value } = useField<any>({ path })
  const { getDataByPath } = useForm()
  
  const actualValue = Array.isArray(value) ? value : getDataByPath(path)

  if (!actualValue || !Array.isArray(actualValue)) {
    return null
  }

  return (
    <div style={{ 
      marginBottom: '30px',
      padding: '25px',
      background: 'var(--theme-elevation-50)',
      borderRadius: '4px',
      border: '1px solid var(--theme-elevation-150)',
      color: 'var(--theme-text)'
    }}>
      <h4 style={{ marginTop: 0, marginBottom: '20px', fontSize: '1rem', fontWeight: 'bold' }}>
        {field.label || 'Submission Details'}
      </h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {actualValue.map((item: any, index: number) => (
          <div key={index} style={{ 
            display: 'grid',
            gridTemplateColumns: '150px 1fr',
            borderBottom: index === actualValue.length - 1 ? 'none' : '1px solid var(--theme-elevation-100)',
            paddingBottom: index === actualValue.length - 1 ? 0 : '12px',
          }}>
            <span style={{ 
              fontWeight: '600', 
              color: 'var(--theme-text)',
              opacity: 0.7,
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              {item.field.replace(/-/g, ' ')}
            </span>
            <span style={{ 
              color: 'var(--theme-text)',
              wordBreak: 'break-word',
              fontSize: '1rem'
            }}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SubmissionView
