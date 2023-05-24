package com.sistema.config;

import javax.sql.DataSource;

import org.springframework.boot.jdbc.DataSourceBuilder;

public class DataSourceConfig {
    public DataSource getDataSource() {
        return DataSourceBuilder.create()
          .driverClassName("com.mysql.cj.jdbc.Driver")
          .url("jdbc:mysql://localhost:3306/sistemaDSWI5?createDatabaseIfNotExist=true&useSSL=false&useTimezone=true&serverTimezone=UTC&useUnicode=true&characterEncoding=UTF-8")
          .username("root")
          .password("")
          .build();	
    }
}
