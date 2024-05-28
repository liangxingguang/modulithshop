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
package com.suisung.shopsuite.admin.controller.manage;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.core.convert.Convert;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.suisung.shopsuite.admin.model.entity.UserAdmin;
import com.suisung.shopsuite.admin.model.req.UserAdminEditReq;
import com.suisung.shopsuite.admin.model.req.UserAdminListReq;
import com.suisung.shopsuite.admin.service.UserAdminService;
import com.suisung.shopsuite.core.web.CommonRes;
import com.suisung.shopsuite.core.web.controller.BaseController;
import com.suisung.shopsuite.core.web.model.res.BaseListRes;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

/**
 * <p>
 * 管理员表 前端控制器
 * </p>
 *
 * @author Xinze
 * @since 2022-12-22
 */
@Api(tags = "管理员表")
@RestController
@RequestMapping("/manage/admin/userAdmin")
public class UserAdminController extends BaseController {
    @Autowired
    private UserAdminService userAdminService;

    @PreAuthorize("hasAuthority('/manage/admin/userAdmin/list')")
    @ApiOperation(value = "管理员表-分页列表查询", notes = "管理员表-分页列表查询")
    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public CommonRes<BaseListRes<UserAdmin>> list(UserAdminListReq userAdminListReq) {
        IPage<UserAdmin> pageList = userAdminService.lists(userAdminListReq);

        return success(pageList);
    }

    @PreAuthorize("hasAuthority('/manage/admin/userAdmin/detail')")
    @ApiOperation(value = "管理员表-通过user_id查询", notes = "管理员表-通过user_id查询")
    @RequestMapping(value = "/{userId}", method = RequestMethod.GET)
    public CommonRes<UserAdmin> get(@PathVariable Integer userId) {
        UserAdmin userAdmin = userAdminService.get(userId);

        return success(userAdmin);
    }

    @PreAuthorize("hasAuthority('/manage/admin/userAdmin/add')")
    @ApiOperation(value = "管理员表-添加", notes = "管理员表-添加")
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public CommonRes<?> add(UserAdminEditReq userAdminEditReq) {
        UserAdmin userAdmin = BeanUtil.copyProperties(userAdminEditReq, UserAdmin.class);
        boolean success = userAdminService.add(userAdmin);

        if (success) {
            return success();
        }

        return fail();
    }

    @PreAuthorize("hasAuthority('/manage/admin/userAdmin/edit')")
    @ApiOperation(value = "管理员表-编辑", notes = "管理员表-编辑")
    @RequestMapping(value = "/edit", method = RequestMethod.POST)
    public CommonRes<?> edit(UserAdminEditReq userAdminEditReq) {
        UserAdmin userAdmin = BeanUtil.copyProperties(userAdminEditReq, UserAdmin.class);
        boolean success = userAdminService.edit(userAdmin);

        if (success) {
            return success();
        }

        return fail();
    }

    @PreAuthorize("hasAuthority('/manage/admin/userAdmin/remove')")
    @ApiOperation(value = "管理员表-通过user_id删除", notes = "管理员表-通过user_id删除")
    @RequestMapping(value = "/remove", method = RequestMethod.POST)
    public CommonRes<?> remove(@RequestParam("user_id") Integer userId) {
        boolean success = userAdminService.remove(userId);

        if (success) {
            return success();
        }

        return fail();
    }

    @PreAuthorize("hasAuthority('/manage/admin/userAdmin/removeBatch')")
    @ApiOperation(value = "管理员表-批量删除", notes = "管理员表-批量删除")
    @RequestMapping(value = "/removeBatch", method = RequestMethod.POST)
    public CommonRes<?> removeBatch(@RequestParam("user_id") String userIds) {
        boolean success = userAdminService.remove(Convert.toList(Integer.class, userIds));

        if (success) {
            return success();
        }

        return fail();
    }
}

