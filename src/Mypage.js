import './Mypage.css';
import React from 'react';
import QRCode from "qrcode.react"
import axios from 'axios'

class Mypage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            point: 0
        }
    }
    componentDidMount() {
        const {params} = this.props.match
        const id = params.id;
        console.log(id);
        axios.get(`https://maidoary.herokuapp.com/customers/${id}`)
        .then((response) => {
          this.setState({ point: response.data.point });
        })
        axios.get(`https://maidoary.herokuapp.com/customers/${id}/update`)
    }
    render() {
        const {params} = this.props.match
        const id = params.id;
        console.log(params.id)
        return (
            <div class="Mypage">
                <div class="title">MyCoupon</div>
                <div class="point">現在{this.state.point+1}ポイント</div>
                <QRCode value={`https://yolo-b004d.firebaseapp.com/${id}`} />
            </div>
        );
    }
}

export default Mypage;