import Styled from "styled-components";

export let Auction = Styled.div`
            box-shadow: 0 0 5px rgb(197, 196, 196);
            border-radius: 8px;
`
export let Top = Styled.div`
    padding: 18px;
    position: relative;
`
export let Image = Styled.div`
    overflow: hidden;
    &:hover img {
        transform: scale(1.2);
    }
`
export let Img = Styled.img`
    width: 100%;
    height: 100%;
`
export let Icons = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    color: #1877f2;
    width: fit-content;
    position: absolute;
    top: 10%;
    left: 8%;
`
export let Icon = Styled.i`
    font-size: 15px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    color: #777;
    box-shadow: 0 0 8px rgb(197, 196, 196);
    display: flex;
    align-items: center;
    justify-content: center;
    &:not(.fa-gavel):hover {
        background-color: #2695ff;
        color: white;
    }
`

export let Gavel = Styled(Icon)`
    color: white;
    background-color: #2695ff;
    transform: scale(-1,1);
`

export let Trash = Styled(Icon)`
    color: red;
    &:hover {
        background-color: red !important;
        color: white !important;
    }
`;

export let Timer = Styled.div`
    margin: 15px 25px 20px;
    padding: 0 5px 10px;
    text-align: center;
    background-color: white;
    box-shadow: 0 1px 6px rgb(197, 196, 196);
    border-radius: 8px;
`
export let TimerText = Styled.p`
    margin-bottom: 2px;
    color: #777;
`
export let Units = Styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
`
export let Unit = Styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    &:not(:last-child) {
        border-right: 1px solid #ccc;
    }
`
export let FirstUnitSpan = Styled.span`
    font-size: 20px;
    font-weight: 400;
    padding: 0px;
`
export let LastUnitSpan = Styled.span`
    font-size: 13px;
    color: #777;
    padding: 0px;
`
export let Foot = Styled.div`
    padding: 20px;
    padding-bottom: 0;
    border-top: 1px solid #ccc;
    text-align: center;
`
export let AucLink = Styled.a`
    color: black;
    transition: 0s;
    &:hover {
        color: #2695ff;
    }
`
export let FootText = Styled.p`
    color: #777;
`
export let FootTextSpan = Styled.span`
    color: #2695ff;
    font-weight: bold;
`

export let FinishText = Styled.p`
    margin: 75px 25px 20px;
    padding: 0 5px 10px;
    text-align: center;
    font-weight: bold;
`;
export let Username = Styled.span`
    font-weight: bolder;
    text-transform: capitalize;
`