module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 72],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'format',
        'perf',
        'refactor',
        'revert',
        'test',
        'ui',
        'wip',
      ],
    ],
  },
  prompt: {
    messages: {
      skip: '"Enterでスキップ"',
      max: '最大%d文字',
      emptyWarning: '必須項目です',
      upperLimitWarning: '最大文字数を超えています',
    },
    questions: {
      type: {
        description: '変更の種類を選択する',
        enum: {
          build: {
            description: 'ビルドシステムや外部依存に関する変更',
            title: 'Builds',
          },
          chore: {
            description:
              '補助ツールに関するものなどソースやテストの変更を含まない瑣末な変更',
            title: 'Chores',
          },
          ci: {
            description: 'CIの設定ファイルやスクリプトの変更',
            title: 'Continuous Integrations',
          },
          docs: {
            description: 'ドキュメントのみの変更',
            title: 'Documentation',
          },
          feat: {
            description: '機能の追加・変更・削除',
            title: 'Features',
          },
          fix: {
            description: 'バグの修正',
            title: 'Bug Fixes',
          },
          format: {
            description: '動作に影響を与えないコードの書式などの変更',
            title: 'Format',
          },
          perf: {
            description: 'パフォーマンス向上を目的としたコードの変更',
            title: 'Performance Improvements',
          },
          refactor: {
            description: '新機能追加でもバグ修正でもないコードの変更',
            title: 'Code Refactoring',
          },
          revert: {
            description: 'コミットの取り消し',
            title: 'Reverts',
          },
          test: {
            description: 'テストの追加や変更',
            title: 'Tests',
          },
          ui: {
            description: 'スタイリングの追加や変更',
            title: 'UI',
          },
          wip: {
            description: '作業途中でのコミット',
            title: 'WIP',
          },
        },
      },
      scope: {
        description: '変更範囲を記述する',
      },
      subject: {
        description: '変更内容を概括する',
      },
      body: {
        description: '変更内容を詳述する(body:最大100文字)',
      },
      isBreaking: {
        description: '破壊的変更はあるか',
      },
      breakingBody: {
        description: '破壊的変更がある場合は必ず変更内容を詳説する',
      },
      breaking: {
        description: '破壊的変更内容を詳述する(footer:最大100文字)',
      },
      isIssueAffected: {
        description: '未解決のissuesに関する変更か',
      },
      issuesBody: {
        description: 'issuesをcloseする場合は必ず変更内容の詳説する',
      },
      issues: {
        description: '変更内容の詳説とissue番号を記載する(footer:最大100文字)',
      },
    },
  },
}
