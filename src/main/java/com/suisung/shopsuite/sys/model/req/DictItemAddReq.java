package com.suisung.shopsuite.sys.model.req;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;

/**
 * <p>
 * 字典项表
 * </p>
 *
 * @author Xinze
 * @since 2022-12-05
 */
@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
@ApiModel(description = "字典项表参数")
public class DictItemAddReq implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty("字典项名称")
    private String dictItemName;

    @ApiModelProperty("字典项值")
    private String dictItemCode;

    @ApiModelProperty("字典类型")
    private String dictId;

    @ApiModelProperty("是否使用(BOOL):0-未用;1-使用")
    private Boolean dictItemStatus;

    @ApiModelProperty("备注")
    private String dictItemNote;

    @ApiModelProperty("显示顺序")
    private Integer dictItemSort;

    @ApiModelProperty("是否启用(BOOL):0-禁用;1-启用")
    private Boolean dictItemEnable;


}
