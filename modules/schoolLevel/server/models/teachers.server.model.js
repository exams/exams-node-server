'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Teachers Schema
 */
var TeachersSchema = new Schema({
  JSH: {
    type: String,
    required: 'JSH cannot be blank'
  },
  XJSH: {
    type: String,
    required: 'XJSH cannot be blank'
  },
  XSH: {
    type: String,
    required: 'XSH cannot be blank'
  },
  JSM: {
    type: String,
    required: 'JSM cannot be blank'
  },
  XB: {
    type: String,
    default: ''
  },
  ZCDM: {
    type: String,
    default: ''
  },
  ZZZTDM: {
    type: String,
    default: ''
  },
  ZYFXH: {
    type: String,
    default: ''
  },
  XQH: {
    type: String,
    default: ''
  },
  JYSH: {
    type: String,
    default: ''
  },
  CSRQ: {
    type: String,
    default: ''
  },
  SFZH: {
    type: String,
    default: ''
  },
  MZDM: {
    type: String,
    default: ''
  },
  ZZMMDM: {
    type: String,
    default: ''
  },
  YGXLDM: {
    type: String,
    default: ''
  },
  ZWDM: {
    type: String,
    default: ''
  },
  RZRQ: {
    type: String,
    default: ''
  },
  PRRQ: {
    type: String,
    default: ''
  },
  CJGZRQ: {
    type: String,
    default: ''
  },
  LXGZRQ: {
    type: String,
    default: ''
  },
  GXJL: {
    type: String,
    default: ''
  },
  ZRJS: {
    type: String,
    default: ''
  },
  XLDM: {
    type: String,
    default: ''
  },
  XWDM: {
    type: String,
    default: ''
  },
  BYXX: {
    type: String,
    default: ''
  },
  BYRQ: {
    type: String,
    default: ''
  },
  SXZY: {
    type: String,
    default: ''
  },
  CSZY: {
    type: String,
    default: ''
  },
  XZZW: {
    type: String,
    default: ''
  },
  SFSJT: {
    type: String,
    default: ''
  },
  DSLXDM: {
    type: String,
    default: ''
  },
  XYJGDM: {
    type: String,
    default: ''
  },
  SSXK: {
    type: String,
    default: ''
  },
  XKMLH: {
    type: String,
    default: ''
  },
  KCLBDM: {
    type: String,
    default: ''
  },
  GQPX: {
    type: String,
    default: ''
  },
  GRJL: {
    type: String,
    default: ''
  },
  ZJKC: {
    type: String,
    default: ''
  },
  HJQK: {
    type: String,
    default: ''
  },
  POGZDW: {
    type: String,
    default: ''
  },
  JRZW: {
    type: String,
    default: ''
  },
  YXJ: {
    type: String,
    default: ''
  },
  BZ: {
    type: String,
    default: ''
  },
  SFWPJS: {
    type: String,
    default: ''
  },
  YGZDW: {
    type: String,
    default: ''
  },
  PRLX: {
    type: String,
    default: ''
  },
  SKLXDM: {
    type: String,
    default: ''
  },
  NL: {
    type: String,
    default: ''
  },
  JG: {
    type: String,
    default: ''
  },
  RDSJ: {
    type: String,
    default: ''
  },
  JSLX: {
    type: String,
    default: ''
  },
  ZYTC: {
    type: String,
    default: ''
  },
  ZYJSZWDJMCFZDWSJ: {
    type: String,
    default: ''
  },
  ZYZGDJMCFZDWSJ: {
    type: String,
    default: ''
  },
  HYQYYXGZSJDWGW: {
    type: String,
    default: ''
  },
  SHJZ: {
    type: String,
    default: ''
  },
  SFZYDTR: {
    type: String,
    default: ''
  },
  SFGGJS: {
    type: String,
    default: ''
  },
  SFSSSJ: {
    type: String,
    default: ''
  },
  JXGGKT: {
    type: String,
    default: ''
  },
  DQZZGZBJ: {
    type: String,
    default: ''
  },
  compute_0061: {
    type: String,
    default: ''
  }
});

mongoose.model('Teachers', TeachersSchema);
