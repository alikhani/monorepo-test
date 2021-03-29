import * as faker from 'faker';
import { ICategoryArea, CategoryAreaEnum } from '@monorepo-test/api-interfaces';

export class CategoryAreaMock {
  private _data: ICategoryArea = {
    displayName: CategoryAreaEnum.FRONTEND,
    description: null,
  };

  public withId() {
    this._data.id = faker.random.uuid();
    return this;
  }

  public withCategoryId(id: ICategoryArea['id']): CategoryAreaMock {
    this._data.id = id;
    return this;
  }

  public withArea(area: ICategoryArea['displayName']): CategoryAreaMock {
    this._data.displayName = area;
    return this;
  }

  public withDescription(
    description: ICategoryArea['description']
  ): CategoryAreaMock {
    this._data.description = description;
    return this;
  }

  public model(): ICategoryArea {
    return this._data;
  }
}
