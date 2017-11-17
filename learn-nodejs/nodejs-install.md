### 系统环境
> nodejs环境搭建（系统环境为linux。window和mac环境直接下载安装包一步一步安装即可）。

### 安装nodejs 

##### 方式一：通过包管理器安装（推荐）
获取安装nodejs的shell脚本并下载安装包
```
curl --silent --location https://rpm.nodesource.com/setup | bash -
```
或者[获取指定版本](https://github.com/nodesource/distributions/tree/master/rpm)
```
如：
curl --silent --location https://rpm.nodesource.com/setup_4.x | bash -
```
使用yum安装
```
yum -y install nodejs
```
安装多版本管理器
```
# 安装n模块
npm -g install n
# 使用n模块切换nodejs版本，若未安装就下载安装。
n 4.4.4 # 切换到4.4.4版本
```

此方法参考：[官网说明](https://nodejs.org/en/download/package-manager/#enterprise-linux-and-fedora)

##### 方式二：二进制文件安装
下载编译后的二进制文件
> 地址：[官网](https://nodejs.org/dist/)下载即可。  
> ps：==区分源码包==，源码包命名一般为：node-v4.4.4.tar.gz

将下载的二进制文件解压到你的nodejs目录
```
tar zxvf node-v4.4.4.tar.gz
```
> 如果你的nodejs目录不系统默认环境变量找寻目录（echo $PATH命令可以查看），则需要配置环境变量。

配置环境变量（如过需要），环境变量配置[参考](http://www.cnblogs.com/Halifa/archive/2016/08/15/5773796.html)
```
# 修改/etc/profile文件，在末尾添加以下内容
export NODE_HOME=/usr/local/node  # Node所在路径
export PATH=$NODE_HOME/bin:$PATH
# 重启系统或者执行命令 source /etc/profile或. /etc/profile来生效
source /etc/profile
```

> ps：$PATH通常默认为：/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/root/bin几个目录，“:”为环境变量分隔符，如果nodejs编译后的二进制文件没有放在这几个目录中，则需要配置环境变量。**

 
##### 方式三：源码编译安装

1. 环境依赖  
    1. python环境：Python 2.6或Python 2.7。若低于该版本，升级（见下面的升级python方法）（==请勿升级到3.x==）

    1. 源代码编译器：Node自身有部分代码通过C/C++编写，所以需要GCC或G++编译器。
    ``` 
    yum -y install gcc-c++ #（无GCC环境时） 
    ```
 
    1. libssl-dev：提供 SSL/TLS 加密支持
    ```
    yum -y install openssl-devel # （可选）
    ```
    1. make工具：建议使用该工具的3.81版本或者更新的版本。 
    ```
    yum install make # （无make命令时）
    ```

1. 源码包下载及编译安装
    1. 直接官网下载或者使用wget（若没有wget工具，则yum -y install wget安装）下载。

    1. 解压，编译安装
    ```
    tar zxvf node-v4.4.4.tar.gz
    cd node-v4.4.4.tar.gz
    ./configure
    make
    make install
    ```

### 卸载nodejs：

##### 方法一：使用命令卸载
> 该方法需要源码包。且只能删除/usr/local/下的nodejs，不能删除/usr/下的nodejs。不能彻底删除
```
# 进入解压的源码包执行./configure和make uninstall
./configure
make uninstall
```

##### 方法二：直接删除环境变量中的关于nodejs的文件（主要是node，npm相关文件，可以查看nodejs的二进制解压包里有哪些文件）。
> 该方法可以彻底卸载，但是比较麻烦。

**最后：卸载nodejs都是一件麻烦的事情。**


#### 辅助内容
##### 升级python（谨慎！通常不用升级）
1. 直接[下载 python源码包](https://www.python.org/ftp/python/) 或者
  ``` 
  wget downloadUrl
  ```
1. 安装升级python
  ```
  # 先将 xxx.tar.xz解压成 xxx.tar
  xz -d xxx.tar.xz （如没有xz命令，则先yum -y install xz 安装） 
  # 再用 tar xvf xxx.tar来解包
  tar xvf xxx.tar
  # 进入xxx目录执行
  ./configure
  make
  make install
  ```
