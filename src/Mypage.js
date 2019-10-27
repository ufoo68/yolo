import './Mypage.css';
import React from 'react';
import QRCode from "qrcode.react"
import axios from 'axios'
import img from './aseets/izakaya.png'
import mp3 from './aseets/maidoari.mp3'

class Mypage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            point: 0
        }
    }
    componentDidMount() {
        const {params} = this.props.match
        const id = params.id
        axios.get(`https://maidoary.herokuapp.com/customers/${id}/update`)
        .then(() => {
          axios.get(`https://maidoary.herokuapp.com/customers/${id}`)
          .then((response) => {
            this.setState({ point: response.data.point })
          })
        })
    }
    startSpeech = () => {
        const audio = new Audio(mp3)
        audio.play()
      }
    render() {
        const {params} = this.props.match
        const id = params.id
        return (
            <div className="Mypage">
                <div className="title" onClick={() =>  this.startSpeech()}>まいどあり～</div>
                <img src={img} alt="izakaya" className="izakaya"/>
                <div className="point">現在{this.state.point}ポイント</div>
                <QRCode value={`${id}`} />
                <div className="discription">※このページを「ブックマーク」で保存してください</div>
            </div>
        )
    }
}

export default Mypage;