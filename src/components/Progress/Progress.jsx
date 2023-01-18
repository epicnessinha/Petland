import { Steps } from "antd"

const description = "This is a description."
const Progress = () => (
  <Steps
    direction="vertical"
    current={1}
    items={[
      {
        title: "Adoption Request Submitted",
        description,
      },
      {
        title: "In Progress",
        description,
      },
      {
        title: "Approved",
        description,
      },
    ]}
  />
)
export default Progress
