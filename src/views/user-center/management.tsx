export const userState = {
  tablePageConfig: {
    forms: {
      searchForm: [
        {
          key: 'nickName',
          label: '',
          labelType: 'Normal',
          type: 'Input',
          data: {
            placeholder: '请输入用户昵称'
          },
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {}
        },
        {
          key: 'mobile',
          label: '',
          labelType: 'Normal',
          type: 'Input',
          data: {
            placeholder: '请输入联系方式'
          },
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {}
        },
        {
          key: 'time',
          label: '',
          labelType: 'Normal',
          type: 'DatePicker',
          data: {
            style: {
              width: '280px !important'
            }
          },
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {},
          handleKey: 'datetime',
          handleValue: ['startDate', 'endDate']
        }
      ],
      detailForm: [
        {
          key: 'avatarUri',
          label: '头像',
          labelType: 'Normal',
          type: 'Render',
          data: {},
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {},
          labelStyle: {
            'font-weight': '600'
          },
          render: (item: any) => {
            const url = item.data.value
            if (url) {
              return `<img style="width:60px; height:60px;" src=${url}></img>`
            } else {
              return `<div>--</div>`
            }
          }
        },
        {
          key: 'nickName',
          label: '昵称',
          labelType: 'Normal',
          type: 'Render',
          data: {},
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {},
          labelStyle: {
            'font-weight': '600'
          },
          handleItemSetValue: (key: any, value: any) => {
            return value || '--'
          }
        },
        {
          key: 'mobile',
          label: '手机号码',
          labelType: 'Normal',
          type: 'Render',
          data: {},
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {},
          labelStyle: {
            'font-weight': '600'
          },
          handleItemSetValue: (key: any, value: any) => {
            return value || '--'
          }
        },
        {
          key: 'lastLoginTime',
          label: '上次登录',
          labelType: 'Normal',
          type: 'Render',
          data: {},
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {},
          handleKey: '',
          handleItemSetValue:
            '(\r\n  () => {\r\n    if(r[1].lastLoginTime === null) {\r\n      return \'--\'\r\n    }else {\r\n     return ctx.exposed.dayjs(r[1].lastLoginTime).format("YYYY-MM-DD HH:mm:ss")\r\n    }\r\n  }\r\n)()',
          labelStyle: {
            'font-weight': '600'
          }
        },
        {
          key: 'realName',
          label: '姓名',
          labelType: 'Normal',
          type: 'Render',
          data: {},
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {},
          labelStyle: {
            'font-weight': '600'
          },
          handleItemSetValue: (key: any, value: any) => {
            return value || '--'
          }
        },
        {
          key: 'gender',
          label: '性别',
          labelType: 'Normal',
          type: 'Render',
          data: {},
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {},
          handleItemSetValue:
            '(\r\n   () => {\r\n      return r[1].gender === 1 ? "男" :  r[1].gender === 2 ? "女" : "--"\r\n    }\r\n)()',
          labelStyle: {
            'font-weight': '600'
          }
        },
        {
          key: 'birthday',
          label: '出生日期',
          labelType: 'Normal',
          type: 'Render',
          data: {},
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {},
          handleKey: '',
          handleItemSetValue:
            '(\r\n  () => {\r\n    if(r[1].birthday === null) {\r\n      return \'--\'\r\n    }else {\r\n     return ctx.exposed.dayjs(r[1].birthday).format("YYYY-MM-DD HH:mm:ss")\r\n    }\r\n  }\r\n)()',
          labelStyle: {
            'font-weight': '600'
          }
        },
        {
          key: 'address',
          label: '地址',
          labelType: 'Normal',
          type: 'Render',
          data: {},
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {},
          labelStyle: {
            'font-weight': '600'
          },
          handleItemSetValue: (key: any, value: any) => {
            return value || '--'
          }
        },
        {
          key: 'createAt',
          label: '注册时间',
          labelType: 'Normal',
          type: 'Render',
          data: {},
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {},
          handleKey: 'datetime',
          handleItemSetValue:
            '(\r\n  () => {\r\n    if(r[1].createAt === null) {\r\n      return \'--\'\r\n    }else {\r\n     return ctx.exposed.dayjs(r[1].createAt).format("YYYY-MM-DD HH:mm:ss")\r\n    }\r\n  }\r\n)()',
          labelStyle: {
            'font-weight': '600'
          }
        }
      ]
    },
    apis: {
      searchApi: {
        key: 'searchApi',
        path: '/api/pwm/v1/AdminUserListInquiry',
        method: 'post',
        config: {
          type: 'admin'
        },
        isLoading: true,
        mock: '',
        handleParams: (params: Record<string, any>) => {
          params.page.orderBy = 'id DESC'
          return params
        }
      },
      detailForm: {
        key: 'detailForm',
        path: '/api/pwm/v1/AdminUserInquiry',
        method: 'post',
        config: {
          type: 'admin'
        },
        handleParams: '(\r\n   () => {\r\n      return {\r\n        id: params.id\r\n      }\r\n    }\r\n)()'
      }
    },
    variables: {},
    buttonGroup: [
      {
        key: 'search',
        label: '查询',
        text: false,
        type: '',
        style: {
          color: '#3860f4',
          'border-color': '#3860f4'
        },
        size: 'default'
      },
      {
        key: 'reset',
        label: '重置',
        text: true,
        type: 'primary',
        size: 'default'
      }
    ],
    tableConfig: {
      columns: [
        {
          prop: 'nickName',
          label: '用户昵称',
          variableMap: {}
        },
        {
          prop: 'mobile',
          label: '用户联系电话',
          variableMap: {}
        },
        {
          prop: 'createAt',
          label: '注册时间',
          variableMap: {},
          handleType: 'time',
          sortable: false
        },
        {
          prop: 'action',
          label: '操作',
          variableMap: {}
        }
      ],
      actions: [
        {
          key: 'custom',
          label: '查看',
          text: true,
          type: 'primary',
          interactionType: 'popup',
          size: 'default',
          title: '基本信息',
          modalWidth: '800px',
          fullscreen: true,
          formKey: 'detailForm',
          dataSourceApiKey: 'detailForm',
          formCancleButton: {
            key: 'cancel',
            label: '关闭',
            type: ''
          }
        }
      ],
      config: '',
      isTablePagination: true
    },
    isMountedSearch: true
  }
}
