

1.  模板引擎使用方法

{{each(i,item) list}}
    {{if item.name == 'rancheng'}}
    <div style="width:100px;background:green;">${item.name}</div>
    {{else}}
    <div style="width:100px;background:yellow;">${item.name}</div>
    {{/if}}
{{/each}}