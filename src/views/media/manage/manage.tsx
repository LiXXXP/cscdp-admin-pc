export const manageState = {
  tablePageConfig: {
    forms: {
      searchForm: [
        {
          key: 'name',
          label: '',
          labelType: 'Normal',
          type: 'Input',
          data: {
            placeholder: '请输入内容名称',
            clearable: true
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
            placeholder: '全部状态',
            clearable: true,
            options: [
              {
                label: '已发布',
                value: 1
              },
              {
                label: '未发布',
                value: 2
              },
              {
                label: '已撤回',
                value: 4
              }
            ]
          },
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {
            variableKey: 'statusVar',
            valueKey: 'value',
            labelKey: 'label'
          },
          getOptionsFromParent: {},
          isGetOptionsFromVariable: true
        },
        {
          key: 'date',
          label: '',
          labelType: 'Normal',
          type: 'DatePicker',
          data: {
            clearable: true,
            'start-placeholder': '发布开始日期',
            'end-placeholder': '发布结束日期',
            style: {
              width: '240px !important'
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
        },
        {
          key: 'categoryId',
          label: '',
          labelType: 'Normal',
          type: 'Select',
          data: {
            clearable: true,
            placeholder: '全部内容分类'
          },
          getOptionsFromApi: {
            isMountedGet: true,
            apiKey: 'categoryListApi',
            method: 'post',
            config: {
              type: 'admin'
            },
            valueKey: 'id',
            labelKey: 'name'
          },
          isGetOptionsFromApi: true
        },
        {
          key: 'type',
          label: '',
          labelType: 'Normal',
          type: 'Select',
          data: {
            clearable: true,
            placeholder: '全部内容类型',
            options: [
              {
                label: '图文',
                value: 1
              },
              {
                label: '视频',
                value: 2
              }
            ]
          },
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {
            variableKey: 'typeVar',
            valueKey: 'value',
            labelKey: 'label'
          },
          getOptionsFromParent: {},
          isGetOptionsFromVariable: true
        },
        {
          key: 'top',
          label: '',
          labelType: 'Normal',
          type: 'Select',
          data: {
            clearable: true,
            placeholder: '置顶',
            options: [
              {
                label: '不置顶',
                value: 1
              },
              {
                label: '置顶',
                value: 2
              }
            ]
          },
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {
            variableKey: 'topVar',
            valueKey: 'value',
            labelKey: 'label'
          },
          getOptionsFromParent: {},
          isGetOptionsFromVariable: true
        }
      ],
      createForm: [
        {
          key: 'type',
          label: '内容类型',
          labelType: 'Normal',
          type: 'Select',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            clearable: true,
            options: [
              {
                label: '图文',
                value: 1
              },
              {
                label: '视频',
                value: 2
              }
            ],
            value: 1,
            style: {
              width: '400px !important'
            }
          },
          required: true,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {
            variableKey: 'typeVar'
          },
          getOptionsFromParent: {},
          isIgnore: false,
          isGetOptionsFromVariable: true
        },
        {
          key: 'categoryId',
          label: '内容分类',
          labelType: 'Normal',
          type: 'Select',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            clearable: true,
            style: {
              width: '400px !important'
            }
          },
          required: true,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {
            isMountedGet: true,
            apiKey: 'categoryListApi',
            method: 'post',
            config: {
              type: 'admin'
            },
            valueKey: 'id',
            labelKey: 'name'
          },
          getOptionsFromVariables: {},
          getOptionsFromParent: {},
          isIgnore: false,
          isGetOptionsFromApi: true
        },
        {
          key: 'name',
          label: '内容标题',
          labelType: 'Normal',
          type: 'Input',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            clearable: true,
            maxlength: '50',
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
          isIgnore: false
        },
        {
          key: 'source',
          label: '文章来源',
          labelType: 'Normal',
          type: 'Input',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            clearable: true,
            maxlength: '30',
            'show-word-limit': true,
            style: {
              width: '400px !important'
            }
          },
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {}
        },
        {
          key: 'alias',
          label: '内容副标题',
          labelType: 'Normal',
          type: 'Input',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            clearable: true,
            maxlength: '50',
            'show-word-limit': true,
            style: {
              width: '400px !important'
            }
          },
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {}
        },
        {
          key: 'author',
          label: '文章作者',
          labelType: 'Normal',
          type: 'Input',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            clearable: true,
            maxlength: '30',
            'show-word-limit': true,
            style: {
              width: '400px !important'
            }
          },
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {}
        },
        {
          key: 'summary',
          label: '摘要',
          labelType: 'Normal',
          type: 'Input',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            clearable: true,
            maxlength: '100',
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
          getOptionsFromParent: {}
        },
        {
          key: 'originalUrl',
          label: '原文链接',
          labelType: 'Normal',
          type: 'Input',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            clearable: true,
            maxlength: '200',
            'show-word-limit': true,
            style: {
              width: '400px !important'
            }
          },
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {}
        },
        {
          key: 'coverUri',
          label: '封面图',
          labelType: 'Normal',
          type: 'Upload',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            accept: 'image/*',
            limit: 1,
            listType: 'picture',
            fileType: 'jpeg',
            multiple: true,
            sizeLimit: 5,
            value: []
          },
          required: true,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {}
        },
        {
          key: 'top',
          label: '置顶',
          labelType: 'Normal',
          type: 'Switch',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            clearable: true
          },
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {},
          handleItemSetValue: (key: any, value: any) => {
            if (value === 1) {
              return false
            }
            if (value === 2) {
              return true
            }
          },
          handleItemValue: (key: any, value: any, r: Record<string, any>) => {
            if (value) {
              r[key] = 2
            } else {
              r[key] = 1
            }
          }
        },
        {
          key: 'recommend',
          label: '推荐',
          labelType: 'Normal',
          type: 'Switch',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            clearable: true
          },
          required: false,
          subscribe: {},
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {}
        },
        {
          key: 'content',
          label: '内容',
          labelType: 'Normal',
          type: 'RichText',
          labelStyle: {
            'font-weight': 600
          },
          data: {},
          required: true,
          subscribe: {
            key: 'type',
            match: '(() => {\n  return r[0] === 1\n})()',
            success: ['show'],
            error: ['clear', 'hide']
          },
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {},
          isIgnore: false,
          status: false
        },
        {
          key: 'videoUri',
          label: '视频链接',
          labelType: 'Normal',
          type: 'Input',
          labelStyle: {
            'font-weight': 600
          },
          data: {
            type: 'textarea',
            style: {
              width: '400px !important'
            }
          },
          required: true,
          subscribe: {
            key: 'type',
            match: '(() => {\n  return r[0] === 2 \n})()',
            success: ['show'],
            error: ['hide', 'clear']
          },
          publish: {},
          getOptionsFromApi: {},
          getOptionsFromVariables: {},
          getOptionsFromParent: {},
          status: false,
          isIgnore: false
        }
      ]
    },
    apis: {
      searchApi: {
        key: 'searchApi',
        path: '/api/pwm/v1/AdminNewsListInquiry',
        method: 'post',
        config: {
          type: 'admin'
        },
        handleParams: (params: Record<string, any>) => {
          params.page.orderBy = 'pnm.id DESC'
          return params
        }
      },
      categoryListApi: {
        key: 'categoryListApi',
        path: '/api/pwm/v1/AdminNewsCategoryNameListInquiry',
        method: 'post',
        config: {
          type: 'admin'
        }
      },
      addApi: {
        key: 'addApi',
        path: '/api/pwm/v1/AdminNewsAddition',
        method: 'post',
        config: {
          type: 'admin'
        },
        handleParams: (params: Record<string, any>) => {
          return {
            ...params,
            status: 1,
            coverUri: params.coverUri?.length > 0 ? params.coverUri[0].url : null
          }
        }
      },
      saveApi: {
        key: 'saveApi',
        path: '/api/pwm/v1/AdminNewsAddition',
        method: 'post',
        config: {
          type: 'admin'
        },
        handleParams: (params: Record<string, any>) => {
          return {
            ...params,
            status: 2,
            coverUri: params.coverUri?.length > 0 ? params.coverUri[0].url : null
          }
        }
      },
      deleteApi: {
        key: 'deleteApi',
        path: '/api/pwm/v1/AdminNewsDeleting',
        method: 'post',
        config: {
          type: 'admin'
        },
        isLoading: true,
        isMessage: true,
        handleParams: '(() => {\n  return {\n    id: params.id\n  }\n})()'
      },
      newsInquiryApi: {
        key: 'newsInquiryApi',
        path: '/api/pwm/v1/AdminNewsInquiry',
        method: 'post',
        config: {
          type: 'admin'
        },
        handleParams: '(() => {\n  return {\n    id: params.id\n  }\n})()',
        handleResult: (body: Record<string, any>) => {
          if (body.coverUri) {
            body.coverUri = [{ url: body.coverUri }]
          }
          return body
        }
      },
      newsMaintenanceApi: {
        key: 'newsMaintenanceApi',
        path: '/api/pwm/v1/AdminNewsMaintenance',
        method: 'post',
        config: {
          type: 'admin'
        },
        handleParams: (params: any) => {
          return {
            ...params,
            coverUri: params.coverUri ? params.coverUri[0]?.url : null
          }
        },
        isLoading: true,
        isMessage: true
      },
      statusMaintenanceApi: {
        key: 'statusMaintenanceApi',
        path: '/api/pwm/v1/AdminNewsStatusMaintenance',
        method: 'post',
        config: {
          type: 'admin'
        },
        isLoading: true,
        isMessage: true,
        handleParams: '(() => {\n  return {\n    id: params.id,\n    status: params.status === 1? 4:1\n  }\n})()'
      }
    },
    variables: {
      statusVar: {
        key: 'statusVar',
        value: [
          {
            label: '已发布',
            value: 1
          },
          {
            label: '未发布',
            value: 2
          },
          {
            label: '已撤回',
            value: 4
          }
        ],
        handleResult: ''
      },
      typeVar: {
        key: 'typeVar',
        value: [
          {
            label: '图文',
            value: 1
          },
          {
            label: '视频',
            value: 2
          }
        ]
      },
      topVar: {
        key: 'topVar',
        value: [
          {
            label: '不置顶',
            value: 1
          },
          {
            label: '置顶',
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
        title: '新增图文',
        modalWidth: '800px',
        onCallback: ['search', 'message'],
        formKey: 'createForm',
        fullscreen: true,
        dataSourceApiKey: '',
        apiKey: 'addApi',
        formCancleButton: {
          key: 'cancel',
          label: '取消',
          type: ''
        },
        formActions: [
          {
            key: 'save',
            label: '保存草稿',
            type: 'primary',
            apiKey: 'saveApi'
          },
          {
            key: 'confirm',
            label: '发布',
            type: 'primary'
          }
        ]
      }
    ],
    tableConfig: {
      columns: [
        {
          prop: 'categoryName',
          label: '内容分类',
          variableMap: {}
        },
        {
          prop: 'name',
          label: '内容名称',
          variableMap: {},
          showOverflowTooltip: true
        },
        {
          prop: 'source',
          label: '来源',
          variableMap: {},
          showOverflowTooltip: true
        },
        {
          prop: 'createAt',
          label: '发布时间',
          variableMap: {},
          handleType: 'time'
        },
        {
          prop: 'status',
          label: '状态',
          variableMap: {
            variableKey: 'statusVar'
          }
        },
        {
          prop: 'type',
          label: '内容类型',
          variableMap: {
            variableKey: 'typeVar'
          }
        },
        {
          prop: 'top',
          label: '是否置顶',
          variableMap: {
            variableKey: 'topVar'
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
          onCallback: ['search', 'message'],
          size: 'default',
          title: '内容编辑',
          modalWidth: '800px',
          fullscreen: true,
          dataSourceApiKey: 'newsInquiryApi',
          apiKey: 'newsMaintenanceApi',
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
          key: 'up',
          label: '发布',
          text: true,
          type: 'primary',
          interactionType: 'confirm',
          onCallback: ['search', 'message'],
          size: 'default',
          title: '内容发布',
          content: '确认发布此内容吗',
          modalWidth: '500px',
          if: '(() => {\n  return params.status !== 1\n})()',
          apiKey: 'statusMaintenanceApi',
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
          key: 'withdraw',
          label: '撤回',
          text: true,
          type: 'primary',
          interactionType: 'confirm',
          onCallback: ['search', 'message'],
          size: 'default',
          title: '内容撤回',
          content: '确认撤回此内容吗？',
          modalWidth: '500px',
          if: '(() => {\n  return params.status === 1\n})()',
          apiKey: 'statusMaintenanceApi',
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
          onCallback: ['search', 'message'],
          size: 'default',
          title: '内容删除',
          content: '确定将删除此内容吗？',
          modalWidth: '500px',
          if: '(() => {\n  return params.status === 2\n})()',
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
