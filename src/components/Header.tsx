import styled from "styled-components";

const Manga = ({title, chapter, image, gridArea, topic} : {title: string, image: string, chapter: number, gridArea: string, topic?: string}) => {
    return <WrapItem style={{ backgroundImage: `url(${image})`, gridArea}}>
        <Chapter>chương {chapter}</Chapter>
        <div>
            <Topic>{topic || ''}</Topic>
            <Title>{title}</Title>
        </div>
    </WrapItem>
}

const Header = () => {
    return <ContainerStyled>
        <Manga image="https://i.truyenvua.com/slider/290x191/slider_1561609693.jpg?gt=hdfgdfg&mobile=2" title="title 1" chapter={20} gridArea='1/1/2/2' />
        <Manga image="https://i.truyenvua.com/ebook/190x247/saeki-san-wa-nemutteru_1535983645.jpg?gt=hdfgdfg&mobile=2" title="title 2" chapter={35}  gridArea='2/1/3/2'/>
        <Manga image="https://i.truyenvua.com/ebook/190x247/vo-luyen-dinh-phong_1514903369.jpg?gt=hdfgdfg&mobile=2" title="title 3" chapter={43}  gridArea='1/2/3/4' topic="topic manga 3" />
        <Manga image="https://i.truyenvua.com/ebook/190x247/kingdom-vuong-gia-thien-ha_1631766926.jpg?gt=hdfgdfg&mobile=2" title="title 4" chapter={25}  gridArea=''/>
        <Manga image="https://i.truyenvua.com/ebook/190x247/bi-mat-cua-co-vo-gyaru_1697184626.jpg?gt=hdfgdfg&mobile=2" title="title 5" chapter={54}  gridArea=''/>
    </ContainerStyled>
}

export default Header;

const ContainerStyled = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 200px 200px;
`
const WrapItem = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    `
const Title = styled.h2`
    color: white;
    margin-left: 10px;
 
  `
const Chapter = styled.p`
    color: white;
    margin-left: 10px;
`

const Topic = styled.h4`
    color: white;
    margin-left: 10px;
`
