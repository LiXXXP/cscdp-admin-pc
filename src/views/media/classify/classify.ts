export const classifyState = {
  tablePageConfig: {
    forms: {
      searchForm: [
        {
          key: 'name',
          label: '',
          labelType: 'Normal',
          type: 'Input',
          data: {
            clearable: true,
            placeholder: '请输入内容分类名称'
          },
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {}
        },
        {
          key: 'status',
          label: '',
          labelType: 'Normal',
          type: 'Select',
          data: {
            clearable: true,
            placeholder: '是否显示'
          },
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {
            variableKey: 'isShowVar',
            valueKey: 'value',
            labelKey: 'label'
          },
          getOptionsFromParent: {},
          isGetOptionsFromVariable: true
        },
        {
          key: 'endDate',
          label: '',
          labelType: 'Normal',
          type: 'DatePicker',
          data: {
            value: [],
            clearable: true
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
      createFrom: [
        {
          key: 'name',
          label: '内容分类名称',
          labelType: 'Normal',
          type: 'Input',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            maxlength: 10,
            clearable: true,
            'show-word-limit': true,
            style: {
              width: '400px !important'
            }
          },
          required: true,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {},
          tip: '',
          isIgnore: false,
          rules: [{ pattern: /^[^\s]*$/, message: '不能输入空格' }]
        },
        {
          key: 'status',
          label: '是否显示',
          labelType: 'Normal',
          type: 'Select',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            clearable: true,
            options: [
              {
                label: '未显示',
                value: 1
              },
              {
                label: '已显示',
                value: 2
              }
            ],
            style: {
              width: '400px !important'
            }
          },
          required: true,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {
            variableKey: 'isShowVar',
            valueKey: 'value',
            labelKey: 'label'
          },
          getOptionsFromParent: {},
          isGetOptionsFromVariable: true,
          isIgnore: false
        },
        {
          key: 'sort',
          label: '排序',
          labelType: 'Normal',
          type: 'Input',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            value: 10,
            clearable: true,
            style: {
              width: '400px !important'
            }
          },
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {},
          tip: '默认10，数字越大，排序越靠前',
          rules: [{ pattern: /^([0]|[1-9][0-9]*)$/, message: '只能输入正整数' }]
        }
      ],
      editFrom: [
        {
          key: 'name',
          label: '内容分类名称',
          labelType: 'Normal',
          type: 'Input',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            maxlength: 10,
            clearable: true,
            'show-word-limit': true,
            style: {
              width: '400px !important'
            }
          },
          required: true,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {},
          isIgnore: false,
          rules: [{ pattern: /^[^\s]*$/, message: '不能输入空格' }]
        },
        {
          key: 'status',
          label: '是否显示',
          labelType: 'Normal',
          type: 'Select',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            clearable: true,
            options: [
              {
                label: '未显示',
                value: 1
              },
              {
                label: '已显示',
                value: 2
              }
            ],
            style: {
              width: '400px !important'
            }
          },
          required: true,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {
            variableKey: 'isShowVar'
          },
          getOptionsFromParent: {},
          isIgnore: false,
          isGetOptionsFromVariable: true
        },
        {
          key: 'sort',
          label: '排序',
          labelType: 'Normal',
          type: 'Input',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            clearable: true,
            style: {
              width: '400px !important'
            }
          },
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {},
          tip: '默认10，数字越大，排序越靠前',
          rules: [{ pattern: /^([0]|[1-9][0-9]*)$/, message: '只能输入正整数' }]
        }
      ]
    },
    apis: {
      searchApi: {
        key: 'searchApi',
        path: '/api/pwm/v1/AdminNewsCategoryListInquiry',
        method: 'post',
        config: {
          type: 'admin'
        },
        mock: '',
        isMessage: true,
        isLoading: true,
        handleParams: (params: Record<string, any>) => {
          params.page.orderBy = 'id DESC'
          return params
        }
      },
      deleteApi: {
        key: 'deleteApi',
        path: '/api/pwm/v1/AdminNewsCategoryDeleting',
        method: 'post',
        config: {
          type: 'admin'
        },
        isLoading: true,
        isMessage: true,
        handleParams: '(() => {\n  return {\n    id: params.id\n  }\n})()'
      },
      addApi: {
        key: 'addApi',
        path: '/api/pwm/v1/AdminNewsCategoryAddition',
        method: 'post',
        config: {
          type: 'admin'
        },
        isLoading: true,
        isMessage: true,
        handleParams: '(() => {\n  return {\n    ...params\n  }\n})()'
      },
      maintenanceApi: {
        key: 'maintenanceApi',
        path: '/api/pwm/v1/AdminNewsCategoryMaintenance',
        method: 'post',
        config: {
          type: 'admin'
        },
        handleParams: '(() => {\n  return {\n    ...params,\n    id: params.id\n  }\n})()'
      }
    },
    variables: {
      isShowVar: {
        key: 'isShowVar',
        value: [
          {
            label: '已显示',
            value: 1
          },
          {
            label: '未显示',
            value: 2
          }
        ]
      }
    },
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
        key: 'create',
        label: '新增',
        text: false,
        type: 'primary',
        size: 'default',
        interactionType: 'popup',
        title: '新增内容分类',
        modalWidth: '800px',
        formKey: 'createFrom',
        apiKey: 'addApi',
        onCallback: ['search', 'message'],
        formCancleButton: {
          key: 'cancel',
          label: '取消',
          type: ''
        },
        formActions: [
          {
            key: 'confirm',
            label: '确定',
            type: 'primary'
          }
        ]
      }
    ],
    tableConfig: {
      columns: [
        {
          prop: 'name',
          label: '内容分类名称',
          variableMap: {}
        },
        {
          prop: 'sort',
          label: '排序',
          variableMap: {}
        },
        {
          prop: 'createAt',
          label: '发布时间',
          variableMap: {},
          handleType: 'time'
        },
        {
          prop: 'status',
          label: '是否显示',
          variableMap: {
            variableKey: 'isShowVar'
          }
        },
        {
          prop: 'action',
          label: '操作',
          variableMap: {}
        }
      ],
      actions: [
        {
          key: 'edit',
          label: '编辑',
          text: true,
          type: 'primary',
          interactionType: 'popup',
          size: 'default',
          title: '内容分类编辑',
          modalWidth: '800px',
          applyRowData: true,
          formKey: 'editFrom',
          onCallback: ['search', 'message'],
          apiKey: 'maintenanceApi',
          formCancleButton: {
            key: 'cancel',
            label: '取消',
            type: ''
          },
          formActions: [
            {
              key: 'confirm',
              label: '确定',
              type: 'primary'
            }
          ]
        },
        {
          key: 'delete',
          label: '删除',
          text: true,
          type: 'primary',
          interactionType: 'confirm',
          size: 'default',
          title: '内容分类删除',
          content: '分类删除后不可修复，确定删除吗？',
          modalWidth: '500px',
          apiKey: 'deleteApi',
          formCancleButton: {
            key: 'cancel',
            label: '取消',
            type: ''
          },
          formActions: [
            {
              key: 'confirm',
              label: '确定',
              type: 'primary'
            }
          ]
        }
      ],
      config: '',
      isTablePagination: true
    },
    isMountedSearch: true
  }
}
