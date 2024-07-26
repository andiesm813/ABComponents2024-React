import { IgrButton, IgrButtonModule, IgrIconButton, IgrIconButtonModule, IgrList, IgrListHeader, IgrListHeaderModule, IgrListItem, IgrListModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import styles from './mouse-events.module.css';
import createClassTransformer from '../style-utils';

IgrButtonModule.register();
IgrIconButtonModule.register();
IgrListHeaderModule.register();
IgrListModule.register();
IgrRippleModule.register();

export default function MouseEvents() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();

  return (
    <>
      <div className={classes("row-layout mouse-events-container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("column-layout group_1")}>
            <IgrButton size="large" className={classes("button")}>
              <span key={uuid()}>Button</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton size="large" className={classes("button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <span key={uuid()}>Button</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="outlined" size="large" className={classes("button")}>
              <span key={uuid()}>Button</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="outlined" size="large" className={classes("button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <span key={uuid()}>Button</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="flat" size="large" className={classes("button")}>
              <span key={uuid()}>Button</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="flat" size="large" className={classes("button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <span key={uuid()}>Button</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="fab" size="large" className={classes("button_1")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="fab" size="large" className={classes("button_1")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <span key={uuid()}>FAB</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrIconButton variant="flat" className={classes("icon-button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>email</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
          <IgrList className={classes("list")}>
            <IgrListHeader key={uuid()}>
              <div key={uuid()}>Header</div>
            </IgrListHeader>
            <IgrListItem key={uuid()}>
              <div slot="title" key={uuid()}>Single Line Item Default</div>
              <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>keyboard_arrow_right</span>
              </span>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="title" key={uuid()}>Single Line Item Default</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="title" key={uuid()}>Single Line Item Default</div>
              <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>keyboard_arrow_right</span>
              </span>
            </IgrListItem>
          </IgrList>
        </div>
        <div className={classes("column-layout group")}>
          <div className={classes("column-layout group_1")}>
            <IgrButton size="large" className={classes("button button_2")}>
              <span key={uuid()}>Button</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton size="large" className={classes("button button_3")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <span key={uuid()}>Button</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="outlined" size="large" className={classes("button button_4")}>
              <span key={uuid()}>Button</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="outlined" size="large" className={classes("button button_5")}>
              <span className={classes("material-icons icon_1")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <span key={uuid()}>Button</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="flat" size="large" className={classes("button button_6")}>
              <span key={uuid()}>Button</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="flat" size="large" className={classes("button button_7")}>
              <span className={classes("material-icons icon_1")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <span key={uuid()}>Button</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="fab" size="large" className={classes("button_1 button_1_1")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="fab" size="large" className={classes("button_1 button_1_2")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <span key={uuid()}>FAB</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrIconButton variant="flat" className={classes("icon-button icon-button_1")}>
              <span className={classes("material-icons icon_1")} key={uuid()}>
                <span key={uuid()}>email</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
          <IgrList className={classes("list")}>
            <IgrListHeader key={uuid()}>
              <div key={uuid()}>Header</div>
            </IgrListHeader>
            <IgrListItem key={uuid()}>
              <div slot="title" key={uuid()}>Single Line Item Default</div>
              <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>keyboard_arrow_right</span>
              </span>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="title" key={uuid()}>Single Line Item Default</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="title" key={uuid()}>Single Line Item Default</div>
              <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>keyboard_arrow_right</span>
              </span>
            </IgrListItem>
          </IgrList>
        </div>
      </div>
    </>
  );
}
