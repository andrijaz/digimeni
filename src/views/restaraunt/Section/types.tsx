export interface SectionFormProps {
  initialValues: {
    name: string
    description: string
  }
}

export type SectionFormData = SectionFormProps["initialValues"]
