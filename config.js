var source = {
  name: 'sh3ll_ui',
  children: [
    {
      name: '.git',
      children: [
        { name: 'HEAD', size: 21 },
        { name: 'branches', children: [] },
        { name: 'config', size: 257 },
        { name: 'description', size: 73 },
        {
          name: 'hooks',
          children: [
            { name: 'applypatch-msg.sample', size: 478 },
            { name: 'commit-msg.sample', size: 896 },
            { name: 'fsmonitor-watchman.sample', size: 3327 },
            { name: 'post-update.sample', size: 189 },
            { name: 'pre-applypatch.sample', size: 424 },
            { name: 'pre-commit.sample', size: 1638 },
            { name: 'pre-push.sample', size: 1348 },
            { name: 'pre-rebase.sample', size: 4898 },
            { name: 'pre-receive.sample', size: 544 },
            { name: 'prepare-commit-msg.sample', size: 1492 },
            { name: 'update.sample', size: 3610 }
          ]
        },
        { name: 'index', size: 289 },
        { name: 'info', children: [ { name: 'exclude', size: 240 } ] },
        {
          name: 'logs',
          children: [
            { name: 'HEAD', size: 177 },
            {
              name: 'refs',
              children: [
                {
                  name: 'heads',
                  children: [ { name: 'main', size: 177 } ]
                },
                {
                  name: 'remotes',
                  children: [
                    {
                      name: 'origin',
                      children: [ { name: 'HEAD', size: 177 } ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'objects',
          children: [
            { name: 'info', children: [] },
            {
              name: 'pack',
              children: [
                {
                  name: 'pack-f4975c00771b5dbbd86574b0f83928fb25073fc1.idx',
                  size: 1324
                },
                {
                  name: 'pack-f4975c00771b5dbbd86574b0f83928fb25073fc1.pack',
                  size: 3388
                }
              ]
            }
          ]
        },
        { name: 'packed-refs', size: 112 },
        {
          name: 'refs',
          children: [
            { name: 'heads', children: [ { name: 'main', size: 41 } ] },
            {
              name: 'remotes',
              children: [
                {
                  name: 'origin',
                  children: [ { name: 'HEAD', size: 30 } ]
                }
              ]
            },
            { name: 'tags', children: [] }
          ]
        }
      ]
    },
    { name: 'build_struct.js', size: 811 },
    { name: 'config.js', size: 0 },
    { name: 'index.html', size: 4503798 },
    {
      name: 'node_modules',
      children: [
        {
          name: 'fs',
          children: [
            { name: 'README.md', size: 328 },
            { name: 'package.json', size: 1335 }
          ]
        }
      ]
    },
    { name: 'package-lock.json', size: 255 },
    { name: 'styles.css', size: 184 }
  ]
}
