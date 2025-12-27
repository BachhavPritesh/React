import './App.css'
import CARD from './Components/card'


function App() {

  const jobOpenings = [
  {
    brandLogo: "https://imgs.search.brave.com/e_Nuk6_IJRzC7cG8hQlHRgCuoA9IsKhyblm5PYgXT5I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzIv/Njc4LzI2MS9zbWFs/bC9nb29nbGUtYXBw/LWxvZ28taWNvbi1m/cmVlLXBuZy5wbmc",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$125",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://imgs.search.brave.com/98dRkyZ1zeADFpvad5k21xmSSuHXk_AS3K8aLxVI7Cw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8z/OS84Ny9hbWF6b24t/aWNvbi1ibGFjay1h/bmQtd2hpdGUtdmVj/dG9yLTM0MjQzOTg3/LmpwZw",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$425",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://imgs.search.brave.com/tTxBH6Dp9wo3aOZYJvYkm99LHSbw2fY_Gw4UoHrhLns/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2FwcGxlLWxvZ28t/cG5nL2FwcGxlLWxv/Z28tcG5nLXdoYXQt/eW91LW5lZWQta25v/dy1iZWZvcmUtcmVi/cmFuZGluZy0xMS5w/bmc",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "Product Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$175",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://imgs.search.brave.com/ph-UW5VbYt6GDJ0pif9OhCcV8383HioKYf86fcLxZmU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/YmllaGl2ZS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MTAvRmFjZWJvb2st/TmV3LUxvZ28tTWV0/YS0xNTB4MTUwLmpw/Zw",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "UX Researcher",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$325",
    location: "Remote",
  },
  {
    brandLogo: "https://imgs.search.brave.com/4m77YUEK8eJHMRD4JHjFMFfR9i7W_xwpBACaX5riHQM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/MzM1Lzk4Ny9zbWFs/bC9uZXRmbGl4LWxv/Z28tbmV0ZmxpeC1p/Y29uLWZyZWUtZnJl/ZS12ZWN0b3IuanBn",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$568",
    location: "Remote",
  },
  {
    brandLogo: "https://imgs.search.brave.com/m7NfdzL50Vg_jv9ZiPrsSTIEUZSW_pF374aGfqUtm7Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE1L2Nm/LzdmLzE1Y2Y3ZjY1/ZDU2ZThmY2YxNmZh/MDhlNDVjZWFlODFk/LmpwZw",
    companyName: "Microsoft",
    datePosted: "2 months ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$345",
    location: "Pune, India",
  },
  {
    brandLogo: "https://imgs.search.brave.com/szCkFCBXl8EaFF2KVFqMxd-vp5K1X_TOZGBIjgA_WXo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/MzM2LzQ4NC9zbWFs/bC90ZXNsYS1sb2dv/LXRlc2xhLWljb24t/dHJhbnNwYXJlbnQt/cG5nLWZyZWUtdmVj/dG9yLmpwZw",
    companyName: "Tesla",
    datePosted: "3 weeks ago",
    post: "UI Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$225",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://imgs.search.brave.com/pqmgTqead2mnxWrtjEhQ1wtywirTblrimO_an_TYl6g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP3E9dWJlcits/b2dvK3BuZw",
    companyName: "Uber",
    datePosted: "6 days ago",
    post: "Mobile App Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$125",
    location: "Delhi, India",
  },
  {
    brandLogo: "https://imgs.search.brave.com/d-QVC5Eb-1smxwc8tlW7ihWaP-pSVgXJ5ky7P-NNHOA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA4/L0NvbG9yLUFpcmJu/Yi1Mb2dvLTUwMHgz/NTQuanBn",
    companyName: "Airbnb",
    datePosted: "4 weeks ago",
    post: "UX Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$155",
    location: "Remote",
  },
  {
    brandLogo: "https://imgs.search.brave.com/kP4yZTsT0NBzYqvNhHfauqTBmBneFYgbcInMRXxgoRU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJhbmRmZXRjaC5p/by9pZDIwbVF5R2VZ/L3cvMzIwL2gvMzIw/L3RoZW1lL2Rhcmsv/aWNvbi5qcGVnP2M9/MWJ4aWQ2NE11cDdh/Y3pld1NBWU1YJnQ9/MTc1ODA3OTM2Mjc4/NQ",
    companyName: "Spotify",
    datePosted: "8 days ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$230",
    location: "Remote",
  },
];
  
  return (
    <>

    

      <div className="parent">
        {jobOpenings.map(function(element){
            return <CARD company={element.companyName} logo={element.brandLogo} date={element.datePosted} posts={element.post} t1={element.tag1}
                    t2={element.tag2} pays={element.pay} locate={element.location} />
        })}
      </div>

    </>
  )
}

export default App
