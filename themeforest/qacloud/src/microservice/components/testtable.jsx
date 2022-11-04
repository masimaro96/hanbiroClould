import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#393939",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const TableData = () => {
  const header = [
      { id: 1, title: '구분' },
      { id: 2, title: '상세내용' },
      { id: 3, title: '효과' },
  ];
  
  const rows = [{
      id: 1,
      col1: '프로그램 배포속도',
      col2: '개발 -> 테스트 -> 검증 -> 운영',
      col3: '160% 향상 (5일 -> 2일)',
  },
  {
      id: 2,
      col1: '서버자원사용',
      col2: '클러스터자원 통합관리',
      col3: '서버자원 사용량 80% 감소',
  },
  {
      id: 3,
      col1: '서버운영관리',
      col2: '서비스및 하드웨어 운영지원',
      col3: '서버관리요소 90% 감소',
  },
  {
      id: 4,
      col1: '롤백 / 복구속도',
      col2: '어플리케이션 원복 / 복구',
      col3: '300% 빠른 회귀(10분미만)',
  },
  {
      id: 5,
      col1: '소통비용',
      col2: '개발 / 운영 / 테스트',
      col3: '0% 이상 비용절감',
  }];

  const tableData = {tableHeaderData: header, tableRowsData: rows};
  return tableData;
}

const { tableHeaderData, tableRowsData } = TableData();

const TrafficTable = () => {
  return(
      <div style={Box}>
          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                {tableHeaderData.map(item => (
                <StyledTableCell key={item.id}>{item.title}</StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableRowsData.map(item => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {item.col1}
                  </StyledTableCell>
                  <StyledTableCell align="center">{item.col2}</StyledTableCell>
                  <StyledTableCell align="center">{item.col3}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  )
}

const Header = {
    color: "white",
    background: "#d9d9d9",
    fontWeight: "bold",
    paddingBottom: 20,
    paddingTop: 10,
    fontSize: "110%",
    paddingBottom: 20,
  }

const Box = {
"@media (max-width: 767px)": {
    fontSize: "80%",
},
}
  