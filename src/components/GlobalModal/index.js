import React, { Component } from 'react';
import { Modal } from 'antd';

export default class GlobalModal extends Component {
  componentDidMount() {
    this.hanldeShow(this.props);
  }
  componentDidUpdate(prodProps){
  	const {
		  info: thatInfo
	  } = this.props;
		const {
			info: prodInfo
		} = prodProps;
  	if (thatInfo.type && (
			  thatInfo.type !== prodInfo.type ||
			  thatInfo.title !== prodInfo.title ||
			  thatInfo.content !== prodInfo.content ||
			  thatInfo.onOk !== prodInfo.onOk ||
			  thatInfo.onCancel !== prodInfo.onCancel
		  )) {
		  this.hanldeShow(this.props);
	  }
  }
  render() {
    return <span className="GlobalModal" />
  }
  hanldeShow(nextProps) {
    const info = nextProps.info;
	  const hideClear = nextProps.hideClear;
	  if (info.type === 'info') {
      this.hanldeInfo(info, hideClear);
    }
    if (info.type === 'success') {
      this.hanldeSuccess(info, hideClear);
    }
    if (info.type === 'error') {
      this.hanldeError(info, hideClear);
    }
    if (info.type === 'warning') {
      this.hanldeWarning(info, hideClear);
    }
  }
  hanldeInfo({ title, content, onOk }, hideClear) {
    Modal.info({
      title,
      content,
      onOk: () => {
        this.props.gModalHideApp();
	      onOk && onOk();
	      hideClear && hideClear();
      },
    });
  }
  hanldeSuccess({ title, content, onOk }, hideClear) {
    Modal.success({
      title,
      content,
      onOk: () => {
        this.props.gModalHideApp();
        onOk && onOk();
	      hideClear && hideClear();
      },
    });
  }
  hanldeError({ title, content, onOk }, hideClear) {
    Modal.error({
      title,
      content,
      onOk: () => {
        onOk && onOk();
	      hideClear && hideClear();
      },
    });
  }
  hanldeWarning({ title, content, onOk }, hideClear) {
    Modal.warning({
      title,
      content,
      onOk: () => {
        onOk && onOk();
	      hideClear && hideClear();
      },
    });
  }
}
