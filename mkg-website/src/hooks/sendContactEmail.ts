import type { CollectionAfterChangeHook } from 'payload'

export const sendContactEmail: CollectionAfterChangeHook = async ({
  doc,
  req: { payload },
  operation,
}) => {
  if (operation === 'create') {
    const formId = typeof doc.form === 'object' ? doc.form.id : doc.form

    try {
      const form = await payload.findByID({
        collection: 'forms',
        id: formId,
      })

      const submissionData = doc.submissionData || []
      const dataString = submissionData
        .map((item: any) => `${item.field}: ${item.value}`)
        .join('\n')

      await payload.sendEmail({
        to: 'muskegondems@gmail.com',
        subject: `New Form Submission: ${form.title}`,
        text: `You received a new submission for "${form.title}":\n\n${dataString}\n\nSubmitted at: ${new Date().toLocaleString()}`,
      })

      payload.logger.info(`Email sent for form submission: ${form.title}`)
    } catch (error) {
      payload.logger.error(`Error sending contact form email: ${error}`)
    }
  }
}
