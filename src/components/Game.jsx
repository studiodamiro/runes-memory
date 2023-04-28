import React from 'react';
import Card from './Card';

function Game() {
    return (
        <main>
            <div className="score-board">
                <p className="score">72</p>
                <p className="high-score">19</p>
            </div>
            <div className="game">
                <div className="cards">
                    <Card rune={'breakthrough'} hidden={true} />
                    <Card rune={'constraint'} />
                    <Card rune={'defense'} />
                    <Card rune={'disruption'} hidden={true} />
                    <Card rune={'fertility'} />
                    <Card rune={'flow'} />
                    <Card rune={'gateway'} />
                    <Card rune={'growth'} hidden={true} />
                    <Card rune={'harvest'} />
                    <Card rune={'initiation'} />
                    <Card rune={'journey'} />
                    <Card rune={'joy'} />
                    <Card rune={'movement'} />
                    <Card rune={'opening'} />
                    <Card rune={'partnership'} hidden={true} />
                    <Card rune={'possessions'} />
                    <Card rune={'protection'} />
                    <Card rune={'retreat'} />
                    <Card rune={'signals'} />
                    <Card rune={'standstill'} />
                    <Card rune={'strength'} />
                    <Card rune={'the-self'} hidden={true} />
                    <Card rune={'warrior'} />
                    <Card rune={'wholeness'} />
                </div>
            </div>
            <p>
                Symbolizes strength, vitality, and courage, signifying inner power and
                determination.
            </p>
        </main>
    );
}

export default Game;
