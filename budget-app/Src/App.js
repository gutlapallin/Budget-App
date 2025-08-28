import Container from 'react-bootstrap/Container'
import { Button, Stack } from "react-bootstrap"
import BudgetCard from "./components/BugdetCard"
function App() {
  return (
    <Container className = "my-4">
        <Stack direction ="horizontal" gap ="2" className ="mb-4" >
          <ha className = "me-auto">BUDGET</ha>

          <Button variant="primary"> Add Budget</Button>
          <Button variant="outline-primary"> Add Expense</Button>

        </Stack>

        <div style={{
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
          gap: "1rem", 
          alignItems: "flex-start",
         }} 
         >

          <BudgetCard name="Entertainment" amount={800} max ={1000} gray> </BudgetCard>

         </div>
    </Container>

  )
}

export default App
