<style lang="sass" scoped>
    .wrap {
        padding: 10px;
        .title {
            line-height: 2.8;
        }
    }
</style>

<template>

</template>


<script type="text/javascript">
    import Person from '../entity/Person.js';
    // 用webpack编译打包有错，错误原因好像是：需要import的模块  不能同时作为入口文件
    // import Person from './Person.js';

    let p = new Person('张三', 20);
    document.write(p.say());
</script>