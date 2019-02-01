import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from '../../../../reducers/admiNewArticle';
import { actions as AdminActions } from '../../../../reducers/admin';

import style from './style.css';

const { TextArea } = Input;

class AddArticle extends Component {
  componentDidUpdate() {
    const { id, history, changeLocationAdmin } = this.props;
    if (id) {
      changeLocationAdmin(`/article?id=${id}`);
      history.push(`/article?id=${id}`);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        const { addArticle } = this.props;
        addArticle(values.title, values.content);
      }
    });
  }

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <div className={style.container}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            <h3>标题:</h3>
            {
              getFieldDecorator('title', {
                rules: [{ require: true, message: '请输入标题' }],
              })(
                <Input placeholder="标题" />,
              )
            }
          </Form.Item>
          <Form.Item>
            <h3>内容:</h3>
            {
              getFieldDecorator('content', {
                rules: [{ require: true }],
              })(
                <TextArea rows={15} />,
              )
            }
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              发表文章
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrapperAddArticle = Form.create({ name: 'addArticle' })(AddArticle);

function mapStateToProps(state) {
  const { id, title, content } = state.admin.newArticle;
  return {
    id,
    title,
    content,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addArticle: bindActionCreators(actions.addArticle, dispatch),
    changeLocationAdmin: bindActionCreators(AdminActions.changeLocationAdmin, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrapperAddArticle);
