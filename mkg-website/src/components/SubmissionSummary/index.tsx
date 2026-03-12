'use client'
import React from 'react'

const SubmissionSummary: React.FC<any> = ({ cellData }) => {
  if (!cellData || !Array.isArray(cellData)) return null

  // Create a summary of the first few fields
  const summary = cellData
    .slice(0, 3)
    .map((item: any) => `${item.field}: ${item.value}`)
    .join(', ')

  return (
    <div style={{ 
      whiteSpace: 'nowrap', 
      overflow: 'hidden', 
      textOverflow: 'ellipsis', 
      maxWidth: '300px',
      fontSize: '0.9em',
      color: '#666'
    }}>
      {summary}{cellData.length > 3 ? '...' : ''}
    </div>
  )
}

export default SubmissionSummary
