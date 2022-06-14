
import styled, {css} from 'styled-components';


export const Container = styled.div`
padding: 20px;
border-right: 1px solid #ddd;
flex: 0.2;
min-width: 255px;

>.twitter-logo{
    margin: 10px 0;
    width: 46px;
    height: 30px;
    fill: var(--twitterColor) !important;


}

>Button{
    background-color: var(--twitterColor) !important;
    border: none !important;
    color: white !important;
    font-weight: 800 !important;
    text-transform: inherit !important;
    height: 46px !important;
    padding: 0 30px !important;
    border-radius: 9999px !important;

}

`

export const SidebarIcons = styled.div`

display: flex;
align-items: center;
padding: 14px 10px;

>.h2{
    font-size: 19px;
    margin: 0 15px 0 20px;
    font-weight: 700;
}

>.MuiSvgIcon-root {
    width: 30px;
    height: 30px;
} 

&:hover{
    background-color: var(--Hover);
    color: var(--twitterColor);
    transform: color 100ms ease-out;
}

${props => props.active && css `

background-color: var(--Hover);
color: var(--twitterColor);

` 

 }



`