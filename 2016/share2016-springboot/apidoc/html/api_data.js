define({ "api": [
  {
    "type": "post",
    "url": "/api/todo",
    "title": "创建Todo",
    "version": "0.0.1",
    "group": "Todo",
    "name": "CreateTodo",
    "filename": "../src/main/java/me/yangbajing/share2016/web/controller/api/TodoController.java",
    "groupTitle": "Todo",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/api/todo"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Json-Example:",
          "content": "{\n  \"text\": \"String: Todo内容\",\n  \"status\": \"Enum String: Todo状态，Active: 活动，Completed: 已完成\"\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Json-Example:",
          "content": "{\n  \"id\": \"String: ID\",\n  \"text\": \"String: Todo内容\",\n  \"status\": \"Enum String: Todo状态，Active: 活动，Completed: 已完成\",\n  \"createdTime\": \"LocalDateTime: 创建时间\",\n  \"lastModifiedTime\": \"LocalDateTime: 最后更新时间\"\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/todo/item/:id",
    "title": "删除Todo",
    "version": "0.0.1",
    "group": "Todo",
    "name": "DeleteTodo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Todo id</p>"
          }
        ]
      }
    },
    "filename": "../src/main/java/me/yangbajing/share2016/web/controller/api/TodoController.java",
    "groupTitle": "Todo",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/api/todo/item/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Json-Example:",
          "content": "{\n  \"errcode\": 0,\n  \"errmsg\": \"String: 未0时返回错消息\"\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/todo/item/:id",
    "title": "获取Todo",
    "version": "0.0.1",
    "group": "Todo",
    "name": "GetTodo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Todo id</p>"
          }
        ]
      }
    },
    "filename": "../src/main/java/me/yangbajing/share2016/web/controller/api/TodoController.java",
    "groupTitle": "Todo",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/api/todo/item/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Json-Example:",
          "content": "{\n  \"id\": \"String: ID\",\n  \"text\": \"String: Todo内容\",\n  \"status\": \"Enum String: Todo状态，Active: 活动，Completed: 已完成\",\n  \"createdTime\": \"LocalDateTime: 创建时间\",\n  \"lastModifiedTime\": \"LocalDateTime: 最后更新时间\"\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/todo",
    "title": "获取所有Todo",
    "version": "0.0.1",
    "group": "Todo",
    "name": "GetTodoList",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "[String]",
            "optional": false,
            "field": "status",
            "description": "<p>Todo状态，Active: 活动中、Completed: 已完成</p>"
          }
        ]
      }
    },
    "filename": "../src/main/java/me/yangbajing/share2016/web/controller/api/TodoController.java",
    "groupTitle": "Todo",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/api/todo"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Json-Example:",
          "content": "[{\n  \"id\": \"String: ID\",\n  \"text\": \"String: Todo内容\",\n  \"status\": \"Enum String: Todo状态，Active: 活动，Completed: 已完成\",\n  \"createdTime\": \"LocalDateTime: 创建时间\",\n  \"lastModifiedTime\": \"LocalDateTime: 最后更新时间\"\n}]",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/todo/item/:id/active",
    "title": "设置Todo为活动中",
    "version": "0.0.1",
    "group": "Todo",
    "name": "SetTodoActive",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Todo id</p>"
          }
        ]
      }
    },
    "filename": "../src/main/java/me/yangbajing/share2016/web/controller/api/TodoController.java",
    "groupTitle": "Todo",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/api/todo/item/:id/active"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Json-Example:",
          "content": "{\n  \"id\": \"String: ID\",\n  \"text\": \"String: Todo内容\",\n  \"status\": \"Enum String: Todo状态，Active: 活动，Completed: 已完成\",\n  \"createdTime\": \"LocalDateTime: 创建时间\",\n  \"lastModifiedTime\": \"LocalDateTime: 最后更新时间\"\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/todo/item/:id/completed",
    "title": "设置Todo已完成",
    "version": "0.0.1",
    "group": "Todo",
    "name": "SetTodoCompleted",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Todo id</p>"
          }
        ]
      }
    },
    "filename": "../src/main/java/me/yangbajing/share2016/web/controller/api/TodoController.java",
    "groupTitle": "Todo",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/api/todo/item/:id/completed"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Json-Example:",
          "content": "{\n  \"id\": \"String: ID\",\n  \"text\": \"String: Todo内容\",\n  \"status\": \"Enum String: Todo状态，Active: 活动，Completed: 已完成\",\n  \"createdTime\": \"LocalDateTime: 创建时间\",\n  \"lastModifiedTime\": \"LocalDateTime: 最后更新时间\"\n}",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/todo/multi",
    "title": "更新多个Todos",
    "version": "0.0.1",
    "group": "Todo",
    "name": "UpdateMultiTodo",
    "filename": "../src/main/java/me/yangbajing/share2016/web/controller/api/TodoController.java",
    "groupTitle": "Todo",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/api/todo/multi"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Json-Example:",
          "content": "[{\n  \"id\": \"String: ID\",\n  \"text\": \"String: Todo内容\",\n  \"status\": \"Enum String: Todo状态，Active: 活动，Completed: 已完成\",\n  \"createdTime\": \"LocalDateTime: 创建时间\",\n  \"lastModifiedTime\": \"LocalDateTime: 最后更新时间\"\n}]",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Json-Example:",
          "content": "[{\n  \"id\": \"String: ID\",\n  \"text\": \"String: Todo内容\",\n  \"status\": \"Enum String: Todo状态，Active: 活动，Completed: 已完成\",\n  \"createdTime\": \"LocalDateTime: 创建时间\",\n  \"lastModifiedTime\": \"LocalDateTime: 最后更新时间\"\n}]",
          "type": "Json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/todo/multiStatus",
    "title": "更新多个Todo.status",
    "version": "0.0.1",
    "group": "Todo",
    "name": "UpdateMultiTodoStatus",
    "description": "<p>ids可选，不处将更新所有Todo</p>",
    "parameter": {
      "examples": [
        {
          "title": "Request-Json-Example:",
          "content": "{\n  \"ids\": [\"String: Todo.id\"],\n  \"status\": \"Enum String: Todo状态，Active: 活动，Completed: 已完成\"\n}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Json-Response:",
          "content": "{\n  \"ids\": [\"String: Todo.id\"],\n  \"status\": \"Enum String: Todo状态，Active: 活动，Completed: 已完成\"\n}",
          "type": "Json"
        }
      ]
    },
    "filename": "../src/main/java/me/yangbajing/share2016/web/controller/api/TodoController.java",
    "groupTitle": "Todo",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/api/todo/multiStatus"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/todo/item/:id",
    "title": "更新Todo",
    "version": "0.0.1",
    "group": "Todo",
    "name": "UpdateTodo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Todo id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Json-Example:",
          "content": "{\n  \"id\": \"String: ID\",\n  \"text\": \"String: Todo内容\",\n  \"status\": \"Enum String: Todo状态，Active: 活动，Completed: 已完成\",\n  \"createdTime\": \"LocalDateTime: 创建时间\",\n  \"lastModifiedTime\": \"LocalDateTime: 最后更新时间\"\n}",
          "type": "Json"
        }
      ]
    },
    "filename": "../src/main/java/me/yangbajing/share2016/web/controller/api/TodoController.java",
    "groupTitle": "Todo",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/api/todo/item/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Json-Example:",
          "content": "{\n  \"id\": \"String: ID\",\n  \"text\": \"String: Todo内容\",\n  \"status\": \"Enum String: Todo状态，Active: 活动，Completed: 已完成\",\n  \"createdTime\": \"LocalDateTime: 创建时间\",\n  \"lastModifiedTime\": \"LocalDateTime: 最后更新时间\"\n}",
          "type": "Json"
        }
      ]
    }
  }
] });
