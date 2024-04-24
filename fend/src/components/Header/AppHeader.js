import { Badge, Space, Typography } from 'antd'
import { MailOutlined ,BellFilled} from '@ant-design/icons'
import React from 'react'

export default function AppHeader() {
  return (
    <div className='AppHeader' style={{height:'70px'}}>
      <img  style={{width:'100',height:'30px'}} src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google"  />
      <Typography.Title style={{color:'linear-gradient(135deg, #8A2BE2, #BA55D3)'}}>Epic Eventify</Typography.Title>
      <Space>
        <Badge count={5} dot>
        <MailOutlined style={{fontSize:25}}/>
        </Badge>

        <BellFilled style={{fontSize:25}}/>

      </Space>
      </div>
  )
}
