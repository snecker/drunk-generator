drunk-generator
==========

> 生成drunk标准目录结构
> 
	mymodule     
	    ├─index.html                                                                                                                                                                 
	    │                                                                                                                                                                            
	    ├─src                                                                                                                                                                       
	    │  │  app.js                                                                                                                                                                
	    │  │                                                                                                                                                                         
	    │  ├─common                                                                                                                                                                 
	    │  │      ajax.js                                                                                                                                                            
	    │  │      config.js                                                                                                                                                          
	    │  │                                                                                                                                                                         
	    │  └─module                                                                                                                                                                 
	    │          homepage.js                                                                                                                                                        
	    │          subpage.js                                                                                                                                                         
	    │                                                                                                                                                                             
	    └─tpl                                                                                                                                                                        
	        ├─module                                                                                                                                                                 
	        │      home-page.html                                                                                                                                                     
	        │      sub-page.html                                                                                                                                                      
	        │                                                                                                                                                                         
	        └─widget                                                                                                                                                                 
	                header.html

##Usage

1.`安装`
>npm install drunk-generator -g

> 注：依赖gulp、gulp-debug，故确保安装drunk-generator前先安装它们。

2.`运行`
> cd yourModuleRootPath


3.`执行`
> drunk-generator simple #生成简单模板
> 
> 或
> 
> drunk-generator app    #生成包含路由的WebApp项目


-----
@by 隔壁老王

