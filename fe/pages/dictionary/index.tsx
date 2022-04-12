import type { NextPage } from 'next'
import Head from 'next/head'
import { submitWords } from '../../api';
import { Form, Input, Button, message } from 'antd';

interface IDictionary {
  sourceId: string
}
const Dictionary = (props: IDictionary) => {
  const { sourceId = '' } = props;

  const onFinish = async (values: any) => {
    try {
      const { code, msg, data } = await submitWords({ sourceId, ...values })
      message.success("submit success")
    } catch {
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Head>
        <title>dictionary</title>
        <meta name="description" content="this is a electronic dictionary" />
      </Head>

      <div style={{ marginTop: 50 }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="word"
            name="word"
            rules={[{ required: true, message: 'Please input word!' }]}
          >
            <Input style={{ width: '400px' }}  />
          </Form.Item>

          <Form.Item
            label="sentence"
            name="sentence"
            rules={[{ required: true, message: 'Please input sentence!' }]}
          >
            <Input.TextArea style={{ width: '400px' }} rows={5} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default Dictionary
