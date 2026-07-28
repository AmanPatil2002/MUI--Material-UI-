import Hero from '../components/Hero';
import Card from '../components/Cards';
import Card1 from '../components/Cards1';
import Form from '../components/Form';

export default function Home() {
  return (
    <div >
        <Hero/>
        <h2 style={{textAlign:'center',paddingTop:15}}>Items</h2>
        <div style={{display:'flex', gap:30, justifyContent:'center', marginTop:30, marginBottom:30}}>
            <Card/>
            <Card/>
            <Card/>
        </div>
        
            <Card1/>
            <Form/>
        <div>
            Home
        </div>
    </div>
  )
}
