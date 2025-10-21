// TVBOX配置管理
const CONFIG = {
    // 基础信息
    name: "GitHub智能TVBOX服务",
    version: "2.0.0",
    author: "GitHub部署",
    
    // 影视源配置
    sources: {
        // 可以在这里管理多个源
        default: "./tvbox.json",
        backup: "./backup.json"
    },
    
    // 功能开关
    features: {
        autoRedirect: true,
        debugMode: true,
        mobileOptimized: true
    },
    
    // 更新信息
    lastUpdate: "2024-01-20",
    changeLog: [
        "初始版本发布",
        "支持智能客户端识别",
        "优化移动端体验"
    ]
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}