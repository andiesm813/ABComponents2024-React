import { IgrIconButton, IgrIconButtonModule, IgrNavbar, IgrNavbarModule, IgrNavDrawer, IgrNavDrawerHeaderItem, IgrNavDrawerItem, IgrNavDrawerItemModule, IgrNavDrawerModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './app.module.css';
import createClassTransformer from './style-utils';

IgrIconButtonModule.register();
IgrNavbarModule.register();
IgrNavDrawerItemModule.register();
IgrNavDrawerModule.register();
IgrRippleModule.register();

export default function App() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();

  return (
    <>
      <div className={classes("column-layout master-view-container")}>
        <IgrNavbar className={classes("navbar")}>
          <div style={{display: 'contents'}} slot="start" key={uuid()}>
            <IgrIconButton variant="flat">
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>menu</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
          <div className={classes("row-layout group")} key={uuid()}>
            <h6 className={classes("h6")}>
              <span>All AB Components 2024</span>
            </h6>
          </div>
          <div style={{display: 'contents'}} slot="end" key={uuid()}>
            <IgrIconButton variant="flat">
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>search</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
          <div style={{display: 'contents'}} slot="end" key={uuid()}>
            <IgrIconButton variant="flat">
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>favorite</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
          <div style={{display: 'contents'}} slot="end" key={uuid()}>
            <IgrIconButton variant="flat">
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>more_vert</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
        </IgrNavbar>
        <div className={classes("row-layout group_1")}>
          <IgrNavDrawer open="true" position="relative" className={classes("nav-drawer")}>
            <IgrNavDrawerHeaderItem key={uuid()}>
              <div slot="content" key={uuid()}>Component Pages</div>
            </IgrNavDrawerHeaderItem>
            <div style={{display: 'contents'}} onClick={() => navigate(`/all-components`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("imx-icon imx-development icon")} key={uuid()}></span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>All Components</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/avatars-images`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>image</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>Avatars &amp; Images</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/calendar`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>calendar_month</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>Calendar</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/forms`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>dynamic_form</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>Forms</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/forms`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>view_list</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>Lists</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/radiogroup`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>radio_button_checked</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>Radio Group</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/stepper`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>123</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>Stepper</div>
              </IgrNavDrawerItem>
            </div>
          </IgrNavDrawer>
          <div className={classes("view-container")}>
            <Outlet></Outlet>
          </div>
          <IgrNavDrawer position="relative" className={classes("nav-drawer")}>
            <div slot="mini" key={uuid()}>
              <IgrNavDrawerHeaderItem key={uuid()}>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>account_circle</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
              </IgrNavDrawerHeaderItem>
              <div style={{display: 'contents'}} onClick={() => navigate(`/all-components`)} key={uuid()}>
                <IgrNavDrawerItem>
                  <span slot="icon" key={uuid()}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>account_circle</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </span>
                </IgrNavDrawerItem>
              </div>
              <div style={{display: 'contents'}} onClick={() => navigate(`/radiogroup`)} key={uuid()}>
                <IgrNavDrawerItem>
                  <span slot="icon" key={uuid()}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>account_circle</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </span>
                </IgrNavDrawerItem>
              </div>
              <div style={{display: 'contents'}} onClick={() => navigate(`/stepper`)} key={uuid()}>
                <IgrNavDrawerItem>
                  <span slot="icon" key={uuid()}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>account_circle</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </span>
                </IgrNavDrawerItem>
              </div>
              <IgrNavDrawerItem key={uuid()}>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>account_circle</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
              </IgrNavDrawerItem>
            </div>
            <IgrNavDrawerHeaderItem key={uuid()}>
              <div slot="content" key={uuid()}>Component Pages</div>
            </IgrNavDrawerHeaderItem>
            <div style={{display: 'contents'}} onClick={() => navigate(`/all-components`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>account_circle</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>All Components</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/radiogroup`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>account_circle</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>Radio Group</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/stepper`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>account_circle</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>Stepper</div>
              </IgrNavDrawerItem>
            </div>
            <IgrNavDrawerItem key={uuid()}>
              <span slot="icon" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>account_circle</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </span>
            </IgrNavDrawerItem>
          </IgrNavDrawer>
        </div>
      </div>
    </>
  );
}
