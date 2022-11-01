import React from "react";
import styled from 'styled-components';
import '../../CardButton/Components/CardButtonLeft-RightStyle.css'
import { Box } from '@mui/material'
import { Button, ButtonToolbar } from '@/shared/components/Button';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';
import { Link } from 'react-router-dom';


function CardButtonGray($title1,$description1,$description2,$description3,$description4,$description5,$imagedata1,$title2,$description6,$imagedata2,$link1,$link2) {
  
    return (
      <div className='CardButtonGray'>
            <Box className="data-content-box-gray">  
                <div className="Card-Gray">
                    <div className="data-content">
                        <TypographyCard className="data-content-title">{$title1}</TypographyCard>
                        <TypographyCard className="data-content-description">{$description1}</TypographyCard>
                        <TypographyCard className="data-content-description">{$description2}</TypographyCard>
                        <TypographyCard className="data-content-description">{$description3}</TypographyCard>
                        <TypographyCard className="data-content-description">{$description4}</TypographyCard>
                        <TypographyCard className="data-content-description">{$description5}</TypographyCard>
                    </div>
                    <div className="img-data">
                        <img src={$imagedata1}></img>
                    </div>
                </div>
                <ButtonToolbar className='ButtonLeft-Gray'>
                    <Button className='Buttonstyle'><Link to={$link1}>{$link2}<ChevronRightIcon size={30} className='iconButton' /></Link></Button>
                </ButtonToolbar>
            </Box>
            <Box className="data-content-box-gray">  
                <div className="CardButton-Gray">
                    <div className="Card-Gray">
                        <div className="img-data">
                            <img src={$imagedata2}></img>
                        </div>
                        <div className="data-content-right">
                            <TypographyCard className="data-content-title-right">{$title2}</TypographyCard>
                            <TypographyCard className="data-content-description-right">{$description6}</TypographyCard>
                        </div>
                    </div>
                    <ButtonToolbar className='ButtonRight-Gray'>
                        <Button className='Buttonstyle'><Link to="/compute-vps">가상서버(인스턴스) 요금 확인하기<ChevronRightIcon size={30} className='iconButton' /></Link></Button>
                    </ButtonToolbar>
                </div>
            </Box>
      </div>
    );
};

const TypographyCard = styled.div`
  
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 10px;
  }
`;


export default CardButtonGray;