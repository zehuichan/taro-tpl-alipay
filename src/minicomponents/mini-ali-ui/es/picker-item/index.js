import fmtEvent from '../_util/fmtEvent';
Component({
  props: {
    className: '',
    value: '',
    placeholder: '',
    onSelect: function onSelect() {},
    labelCls: '',
    pickerCls: '',
    layer: '',
    // 表单排列位置，当为空时默认横向排列， vertical 为竖向排列
    iconType: 'right'
  },
  methods: {
    onPickerTap: function onPickerTap(e) {
      var event = fmtEvent(this.props, e);
      this.props.onPickerTap(event);
    }
  }
});