import { IgrRadio, IgrRadioGroup, IgrRadioGroupModule, IgrRadioModule } from '@infragistics/igniteui-react';
import { useState } from 'react';
import styles from './radiogroup.module.css';
import createClassTransformer from '../style-utils';

IgrRadioGroupModule.register();
IgrRadioModule.register();

export default function Radiogroup() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const [value, setValue] = useState<string | undefined>('1');

  return (
    <>
      <div className={classes("row-layout radiogroup-container")}>
        <div className={classes("row-layout group")}>
          <IgrRadioGroup alignment="horizontal" value={value} Change={(_c, e) => setValue(e.target.value)} className={classes("radio-group")}>
            <IgrRadio value="1" key="0738ab4b-b5b9-4f73-89bd-0996903154f2" className={classes("radio")}>
              <span key={uuid()}>Label</span>
            </IgrRadio>
            <IgrRadio value="2" key="4a6e66b5-7c95-46f8-905a-f30b7a1598f8" className={classes("radio")}>
              <span key={uuid()}>Label</span>
            </IgrRadio>
            <IgrRadio value="3" key="3edd15c2-55da-43e0-81f8-55ee15eae0a9" className={classes("radio")}>
              <span key={uuid()}>Label</span>
            </IgrRadio>
          </IgrRadioGroup>
          <IgrRadioGroup alignment="horizontal" value={value} Change={(_c, e) => setValue(e.target.value)} className={classes("radio-group")}>
            <IgrRadio value="1" key="e97d98c4-f4e7-4329-8d00-a00d21c5af85" className={classes("radio")}>
              <span key={uuid()}>Label</span>
            </IgrRadio>
            <IgrRadio value="2" key="92479bfe-5d93-4432-adf3-8e1730a2ad49" className={classes("radio")}>
              <span key={uuid()}>Label</span>
            </IgrRadio>
            <IgrRadio value="3" key="68affa2c-1717-49fb-8bd8-63f9b77765fd" className={classes("radio")}>
              <span key={uuid()}>Label</span>
            </IgrRadio>
          </IgrRadioGroup>
          <IgrRadioGroup value={value} Change={(_c, e) => setValue(e.target.value)} className={classes("radio-group")}>
            <IgrRadio value="1" key="42e7023f-6794-458f-b4a3-2f9fc0ccef66" className={classes("radio")}>
              <span key={uuid()}>Label</span>
            </IgrRadio>
            <IgrRadio value="2" key="0b898793-f0ca-4ad6-969d-c834f9d1e82b" className={classes("radio")}>
              <span key={uuid()}>Label</span>
            </IgrRadio>
            <IgrRadio value="3" key="c45241da-1626-432d-9918-ae5d531fc4ac" className={classes("radio")}>
              <span key={uuid()}>Label</span>
            </IgrRadio>
          </IgrRadioGroup>
          <IgrRadioGroup value={value} Change={(_c, e) => setValue(e.target.value)} className={classes("radio-group")}>
            <IgrRadio value="1" key="c071f7e1-fadc-41ad-9ba0-4cc63a35039c" className={classes("radio")}>
              <span key={uuid()}>Label</span>
            </IgrRadio>
            <IgrRadio value="2" key="b715d5a3-8dd4-4eff-b5ad-2036ff0a1f07" className={classes("radio")}>
              <span key={uuid()}>Label</span>
            </IgrRadio>
            <IgrRadio value="3" key="756ce11c-1173-4aa6-9746-e291c992cd7e" className={classes("radio")}>
              <span key={uuid()}>Label</span>
            </IgrRadio>
          </IgrRadioGroup>
        </div>
      </div>
    </>
  );
}
