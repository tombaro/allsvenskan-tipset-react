import React, {Component} from 'react';
import {getStandings} from '../../services/standings';
import {styled} from 'baseui';
import {
    StyledTable,
    StyledHead,
    StyledHeadCell,
    StyledBody,
    StyledRow,
    StyledCell,
  } from 'baseui/table';

const columns = ['Plats', 'Lag', '+/-', 'Poäng'];

const Container = styled('div', {
    minHeight: '270px',
});

const LargeCellSize = '150px';

const LargerHeadCell = styled(StyledHeadCell, {
    minWidth: LargeCellSize,
});

const LargerCell = styled(StyledCell, {
    minWidth: LargeCellSize,
});

const SmallerCell = styled(StyledCell, {
    maxWidth: '30px',
});

class Standings extends Component {
    constructor() {
        super();
        this.state = {
            standings: [],
        }
    }
    componentDidMount() {
        return getStandings()
            .then( 
                data => {
                const current = JSON.parse(data);
                let items = current.result.item.map((team) => {
                    return (
                        team
                    )
                })
                this.setState({standings: items});
        })
    }

    render() {
        return (
            <Container>
            <StyledTable>
                <StyledHead>
                    <StyledHeadCell key="0">{columns[0]}</StyledHeadCell>
                    <LargerHeadCell key="1">{columns[1]}</LargerHeadCell>
                    <StyledHeadCell key="2">{columns[2]}</StyledHeadCell>
                    <StyledHeadCell key="3">{columns[3]}</StyledHeadCell>
                </StyledHead>
                <StyledBody>
                    {this.state.standings.map((row, index) => (
                        <StyledRow key={index}>
                            <SmallerCell>{row.position}</SmallerCell>
                            <LargerCell>{row.team}</LargerCell>
                            <SmallerCell>{row.ms}</SmallerCell>
                            <SmallerCell>{row.points}</SmallerCell>
                        </StyledRow>
                    ))}
                </StyledBody>
            </StyledTable>
            </Container>
        );
    }
}

export default Standings;
