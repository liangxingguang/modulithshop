// +----------------------------------------------------------------------
// | ShopSuite商城系统 [ 赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | 版权所有 随商信息技术（上海）有限公司
// +----------------------------------------------------------------------
// | 未获商业授权前，不得将本软件用于商业用途。禁止整体或任何部分基础上以发展任何派生版本、
// | 修改版本或第三方版本用于重新分发。
// +----------------------------------------------------------------------
// | 官方网站: https://www.shopsuite.cn  https://www.modulithshop.cn
// +----------------------------------------------------------------------
// | 版权和免责声明:
// | 本公司对该软件产品拥有知识产权（包括但不限于商标权、专利权、著作权、商业秘密等）
// | 均受到相关法律法规的保护，任何个人、组织和单位不得在未经本团队书面授权的情况下对所授权
// | 软件框架产品本身申请相关的知识产权，禁止用于任何违法、侵害他人合法权益等恶意的行为，禁
// | 止用于任何违反我国法律法规的一切项目研发，任何个人、组织和单位用于项目研发而产生的任何
// | 意外、疏忽、合约毁坏、诽谤、版权或知识产权侵犯及其造成的损失 (包括但不限于直接、间接、
// | 附带或衍生的损失等)，本团队不承担任何法律责任，本软件框架只能用于公司和个人内部的
// | 法律所允许的合法合规的软件产品研发，详细见https://www.modulithshop.cn/policy
// +----------------------------------------------------------------------
package com.suisung.shopsuite.sys.controller.manage;

import cn.hutool.core.bean.BeanUtil;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.suisung.shopsuite.core.web.CommonRes;
import com.suisung.shopsuite.core.web.controller.BaseController;
import com.suisung.shopsuite.core.web.model.res.BaseListRes;
import com.suisung.shopsuite.sys.model.entity.FeedbackCategory;
import com.suisung.shopsuite.sys.model.req.FeedbackCategoryAddReq;
import com.suisung.shopsuite.sys.model.req.FeedbackCategoryEditReq;
import com.suisung.shopsuite.sys.model.req.FeedbackCategoryListReq;
import com.suisung.shopsuite.sys.model.req.FeedbackCategoryStateEditReq;
import com.suisung.shopsuite.sys.service.FeedbackCategoryService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 * 平台反馈主题分类表 前端控制器
 * </p>
 *
 * @author Xinze
 * @since 2021-06-30
 */
@Api(tags = "平台反馈主题分类表")
@RestController
@RequestMapping("/manage/sys/feedbackCategory")
public class FeedbackCategoryController extends BaseController {
    @Autowired
    private FeedbackCategoryService feedbackCategoryService;

    @PreAuthorize("hasAuthority('/manage/sys/feedbackCategory/list')")
    @ApiOperation(value = "平台反馈主题分类表-分页列表查询", notes = "平台反馈主题分类表-分页列表查询")
    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public CommonRes<BaseListRes<FeedbackCategory>> list(FeedbackCategoryListReq feedbackCategoryListReq) {
        IPage<FeedbackCategory> pageList = feedbackCategoryService.lists(feedbackCategoryListReq);

        return success(pageList);
    }

    @PreAuthorize("hasAuthority('/manage/sys/feedbackCategory/add')")
    @ApiOperation(value = "平台反馈主题分类表-添加", notes = "平台反馈主题分类表-添加")
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public CommonRes<?> add(FeedbackCategoryAddReq feedbackCategoryAddReq) {
        FeedbackCategory feedbackCategory = BeanUtil.copyProperties(feedbackCategoryAddReq, FeedbackCategory.class);
        boolean success = feedbackCategoryService.add(feedbackCategory);

        if (success) {
            return success();
        }

        return fail();
    }

    @PreAuthorize("hasAuthority('/manage/sys/feedbackCategory/edit')")
    @ApiOperation(value = "平台反馈主题分类表-编辑", notes = "平台反馈主题分类表-编辑")
    @RequestMapping(value = "/edit", method = RequestMethod.POST)
    public CommonRes<?> edit(FeedbackCategoryEditReq feedbackCategoryEditReq) {
        FeedbackCategory feedbackCategory = BeanUtil.copyProperties(feedbackCategoryEditReq, FeedbackCategory.class);
        boolean success = feedbackCategoryService.edit(feedbackCategory);

        if (success) {
            return success();
        }

        return fail();
    }

    @PreAuthorize("hasAuthority('/manage/sys/feedbackCategory/editState')")
    @ApiOperation(value = "平台反馈主题分类表-修改状态", notes = "平台反馈主题分类表-修改状态")
    @RequestMapping(value = "/editState", method = RequestMethod.POST)
    public CommonRes<?> editState(FeedbackCategoryStateEditReq feedbackCategoryStateEditReq) {
        FeedbackCategory feedbackCategory = BeanUtil.copyProperties(feedbackCategoryStateEditReq, FeedbackCategory.class);
        boolean success = feedbackCategoryService.edit(feedbackCategory);

        if (success) {
            return success();
        }

        return fail();
    }

    @PreAuthorize("hasAuthority('/manage/sys/feedbackCategory/remove')")
    @ApiOperation(value = "平台反馈主题分类表-通过feedback_category_id删除", notes = "平台反馈主题分类表-通过feedback_category_id删除")
    @RequestMapping(value = "/remove", method = RequestMethod.POST)
    public CommonRes<?> remove(@RequestParam("feedback_category_id") Integer feedbackCategoryId) {
        boolean success = feedbackCategoryService.remove(feedbackCategoryId);

        if (success) {
            return success();
        }

        return fail();
    }
}

