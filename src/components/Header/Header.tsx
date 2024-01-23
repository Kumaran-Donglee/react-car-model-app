import { Link } from "react-router-dom";
import { HeaderWrapper, HeaderList } from "./Header.styled";
import HeaderData from "../../data/StaticJsonData/header.json";

interface HeaderDataType {
  id: number;
  header: string;
}

const Header = () => {
  return (
    <header>
      <HeaderWrapper>
        {(HeaderData as HeaderDataType[]).map((value: HeaderDataType) => (
          <HeaderList key={value.id}><Link to={`${value.header === "Home" ? "/filter-cars" : "/"}`}>{value.header}</Link></HeaderList>
        ))}
      </HeaderWrapper>
    </header>
  );
};

export default Header;
