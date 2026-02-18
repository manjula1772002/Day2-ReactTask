import BadgeItem from "./BadgeItem.jsx";
const Header = () => {


    return(
     <header>
        <nav className="container mx-auto max-w-7xl px-3 my-1 border-0.5 border-b-gray-600"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="text-3xl font-bold text-green-700">Manjula Ponnusamy</div>

          <div>
            <ul 
                style={{
                display: "flex",
                listStyle: "none",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <li><BadgeItem navLink="Home" color="blue" /></li>
              <li><BadgeItem navLink="About" color="green" /></li>
              <li><BadgeItem navLink="Skills" color="yellow" /></li>     
            </ul>
          </div>
        </nav>
      </header>
    );
};


export default Header;

    
