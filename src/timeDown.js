import React from 'react';
import  ad from './timeDown.module.less'
export default class TimeDown extends React.Component {
    constructor() {
        super(...arguments)
        // alert(123)
        
        this.state = {
            day: 0,
            hour: 0,
            minute: 0,
            second: 0
        }
        if(this.props.endTime!=''){
            this.countFun(this.props.endTime)
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.endTime!=''){
            this.countFun(nextProps.endTime)
        }
    }
    componentWillMount() {
        
    }
    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
    countFun = (time) => {
        let end_time = time,
        sys_second = (end_time - new Date().getTime());
        this.timer = setInterval(() => {
            //防止倒计时出现负数
            if (sys_second > 1000) {
                sys_second -= 1000;
                let day = Math.floor((sys_second / 1000 / 3600) / 24);
                let hour = Math.floor((sys_second / 1000 / 3600) % 24);
                let minute = Math.floor((sys_second / 1000 / 60) % 60);
                let second = Math.floor(sys_second / 1000 % 60);
                this.setState({
                    day: day,
                    hour: hour < 10 ? "0" + hour : hour,
                    minute: minute < 10 ? "0" + minute : minute,
                    second: second < 10 ? "0" + second : second
                })
            } else {
                clearInterval(this.timer);
                //倒计时结束时触发父组件的方法
                //this.props.timeEnd();
            }
        }, 1000);
    }
    render() {
        return(
            <div className={ad.right}>
            <div className={ad.col}>
                {/* <span className={ad.timeDown}>倒计时</span> */}
                <div className={ad.row}>
                    <span className={ad.day}>{this.state.day}天</span>
                    <div className={ad.time}>
                        <div className={ad.box}>
                            <span>{this.state.hour}</span>
                        </div>
                        <span style={{ color: '#FA1F4FFF' }}>:</span>
                        <div className={ad.box}>
                            <span>{this.state.minute}</span>
                        </div>
                        <span style={{ color: '#FA1F4FFF' }}>:</span>
                        <div className={ad.box}>
                            <span>{this.state.second}</span>
                        </div>
                    </div>
                </div>
        </div>
</div>
        )
    }

} 